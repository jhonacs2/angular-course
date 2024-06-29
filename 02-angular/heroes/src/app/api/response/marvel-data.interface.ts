export interface MarvelResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: T;
}

export interface MarvelData<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}

export interface CharacterDetails {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: MarvelThumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: Type;
}

export enum Type {
  Cover = 'cover',
  InteriorStory = 'interiorStory',
}

export interface MarvelThumbnail {
  path: string;
  extension: string;
}

export interface URL {
  type: string;
  url: string;
}
