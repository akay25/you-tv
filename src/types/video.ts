export interface IVideoDetail {
  title: string;
  description: string;
  uploadDate: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
  duration: number;
  uploader: IUploader;
  audioStreams: IAudioStream[];
  videoStreams: IVideoStream[];
  subtitles: ISubtitle[];
  previewFrames: IPreviewFrame[];
}

export interface IUploader {
  name: string;
  url: string;
  avatar: string;
  isVerified: boolean;
  subscriberCount: number;
}

interface IAudioStream {
  url: string;
  format: string;
  quality: string;
  mimeType: string;
  codec: string;
  audioTrackId: any;
  audioTrackName: any;
  audioTrackType: any;
  audioTrackLocale: any;
  videoOnly: boolean;
  itag: number;
  bitrate: number;
  initStart: number;
  initEnd: number;
  indexStart: number;
  indexEnd: number;
  width: number;
  height: number;
  fps: number;
  contentLength: number;
}

interface IVideoStream {
  url: string;
  format: string;
  quality: string;
  mimeType: string;
  codec: string;
  audioTrackId: any;
  audioTrackName: any;
  audioTrackType: any;
  audioTrackLocale: any;
  videoOnly: boolean;
  itag: number;
  bitrate: number;
  initStart: number;
  initEnd: number;
  indexStart: number;
  indexEnd: number;
  width: number;
  height: number;
  fps: number;
  contentLength: number;
}

interface ISubtitle {
  url: string;
  mimeType: string;
  name: string;
  code: string;
  autoGenerated: boolean;
}

interface IPreviewFrame {
  urls: string[];
  frameWidth: number;
  frameHeight: number;
  totalCount: number;
  durationPerFrame: number;
  framesPerPageX: number;
  framesPerPageY: number;
}
