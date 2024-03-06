export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  id: number;
};

export type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};

export type result = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  type: string;
  official: boolean;
  id: string;
};

export type videos = {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  overview: string;
  genres: Genre[];
  id: number;
  runtime: number;
  release_date: string;
  videos: {
    results: result[];
  };
};
