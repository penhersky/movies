export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIES = 'GET_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';

export const SET_NEW_MOVIES = 'SET_NEW_MOVIES';

export const ADD_TO_WILL_WATCH = 'ADD_TO_WILL_WATCH';
export const SET_WILL_WATCH = 'SET_WILL_WATCH';
export const DELETE_FROM_WILL_WATCH = 'DELETE_FROM_WILL_WATCH';

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
