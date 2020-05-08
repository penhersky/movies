export const GET_MOVIE = 'GET_MOVIE';
export const SET_MOVIES = 'SET_MOVIES';

export const SET_NEW_MOVIES = 'SET_NEW_MOVIES';

export const ADD_TO_WILL_WATCH = 'ADD_TO_WILL_WATCH';
export const SET_WILL_WATCH = 'SET_WILL_WATCH';
export const DELETE_FROM_WILL_WATCH = 'DELETE_FROM_WILL_WATCH';

export const SET_TOP100_MOVIES = 'SET_TOP100_MOVIES';

export type Movie = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
