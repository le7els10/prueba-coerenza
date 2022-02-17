export interface Movies {
  n: number;
  images_url: string;
  genres: Genre[];
  results: Result[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Result {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: OriginalLanguage;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: Date;
}

export enum OriginalLanguage {
  En = "en",
  It = "it",
  Ja = "ja",
}
