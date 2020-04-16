export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIES = 'GET_MOVIES';

export type Movie = {
  id: string;
  views: number;
  title: string;
  movies: string;
  realizeData: string;
  poster: string;
  overview: string;
  originalLanguage: string;
  backgroundPath: string;
  rating: number;
};
