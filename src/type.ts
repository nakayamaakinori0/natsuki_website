export type GetRequestOptions = {
  method: string;
  redirect: RequestRedirect;
};

export type PaintingList = {
  contents: PaintingType[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type PaintingType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image: {
    url: string;
  };
  description: string;
};

export type NewsListType = {
  contents: News[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  totalCount: number;
  offset: number;
  limit: number;
};

export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  head_image: HeadImage;
  caption: string;
  body: string;
};

export type HeadImage = {
  url: string;
  height: number;
  width: number;
};

export type ProfileType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  detail: string;
};

export type PlaylistItems = {
  kind: string;
  etag: string;
  items: PlaylistItem[];
  pageInfo: PageInfo;
};

export type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

export type PlaylistItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: PlaylistItemSnippet;
  contentDetails: PlaylistItemContentDetails;
  status: PlaylistItemStatus;
};

export type PlaylistItemSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
};

export type Thumbnails = {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
};

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export type ResourceId = {
  kind: string;
  videoId: string;
};

export type PlaylistItemContentDetails = {
  videoId: string;
  videoPublishedAt: string;
};

export type PlaylistItemStatus = {
  privacyStatus: string;
};

export type Video = {
  kind: string;
  etag: string;
  items: VideoItem[];
  pageInfo: PageInfo;
};

export type VideoItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: VideoSnippet;
};

export type VideoSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
};

export type Localized = {
  title: string;
  description: string;
};
