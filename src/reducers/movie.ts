import { GET_MOVIE, Movie } from '../types/movie';

import movie from '../temp';

type MovieAction = {
  type: string;
  id: string;
};

type StateType = {
  movies: Movie[] | [];
  openMovie: Movie;
};

export const initialState = {
  movies: movie,
  openMovie: {
    id: '',
    views: 0,
    title: '',
    movies: '',
    realizeData: '',
    poster: '',
    overview: '',
    originalLanguage: '',
    backgroundPath: '',
    rating: 0,
  },
};

export const movieReducer = (state: StateType = initialState, action: MovieAction) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        openMovie: state.movies.find((value: any, index: number) =>
          value.id === action.id ? value : 0,
        ),
      };
    default:
      return state;
  }
};
