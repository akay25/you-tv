<script setup lang="ts">
import { onMounted, ref } from "vue";

// Local imports
import { getVideoData } from "@/api/main";
import { IVideoDetail } from "@/types/video";
import { ISubtitleURL, IVideoURL } from "./types/VideoPlayer";
const videoData = ref<IVideoDetail | null>(null);
const videoURLs = ref<IVideoURL[]>([]);
const subtitlsURLs = ref<ISubtitleURL[]>([]);
const videoThumbnail = ref<string>("");

// Custom functions
const loadAllVideoStreams = () => {
  if (!videoData.value) return [];

  for (const stream of videoData.value.videoStreams) {
    if (stream.videoOnly || stream.mimeType !== "video/mp4") continue;
    videoURLs.value.push({
      url: stream.url,
      qualityString: stream.quality,
      quality: parseInt(stream.quality.replace("p", ""))
    });
  }
}

const loadAllSubtitles = () => {
  if (!videoData.value) return [];

  for (const subtitle of videoData.value.subtitles) {
    subtitlsURLs.value.push({
      url: subtitle.url,
      title: subtitle.name
    });
  }
}

// Page hooks
onMounted(async () => {
  videoData.value = await getVideoData("a2GujJZfXpg");
  // Load values in state
  loadAllVideoStreams();
  loadAllSubtitles();
  if (!!videoData.value?.thumbnailUrl)
    videoThumbnail.value = videoData.value.thumbnailUrl;
  console.log("Video data fetched: ", videoData.value);
});
</script>
<template>
  <div class="body">
    <div class="loading" v-if="videoData === null">
      API is loading...
    </div>
    <div class="video-page" v-else>
      <div class="video-header">
        Title: {{ videoData.title }} <br />
        Uploader: {{ videoData.uploader.name }}
      </div>
      <div class="video-player">
        <!-- Video player with title overlay -->
        <div class="video-title-overlay">{{ videoData.title }}</div>
        <video :src="videoURLs[0]?.url" controls muted :poster="videoThumbnail" class="video-element"></video>
      </div>
      <div class="sidebar">
        Chat Window will go here
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-player {
  position: relative;
}

.video-element {
  width: 100%;
  height: auto;
  z-index: 1; /* Ensure the video is above the overlay */
}

.video-title-overlay {
  position: absolute;
  top: 10px; /* Adjust as needed */
  left: 10px; /* Adjust as needed */
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  color: white;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  z-index: 2; /* Ensure the overlay is above the video */
}
</style>