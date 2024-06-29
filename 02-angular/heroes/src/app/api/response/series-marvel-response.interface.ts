import { Stories, MarvelThumbnail } from './marvel-data.interface';

export interface SeriesMarvelResponse {
  id:          number;
  title:       string;
  description: string;
  resourceURI: string;
  urls:        URL[];
  startYear:   number;
  endYear:     number;
  rating:      string;
  type:        string;
  modified:    string;
  thumbnail:   MarvelThumbnail;
  creators:    Creators;
  characters:  Characters;
  stories:     Stories;
  comics:      Characters;
  events:      Characters;
  next:        Next;
  previous:    Next;
}

export interface Characters {
  available:     number;
  collectionURI: string;
  items:         Next[];
  returned:      number;
}

export interface Next {
  resourceURI: string;
  name:        string;
}

export interface Creators {
  available:     number;
  collectionURI: string;
  items:         CreatorsItem[];
  returned:      number;
}

export interface CreatorsItem {
  resourceURI: string;
  name:        string;
  role:        string;
}
