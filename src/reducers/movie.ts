import {
  SET_MOVIES,
  SET_NEW_MOVIES,
  SET_TOP100_MOVIES,
  Movie,
} from '../types/movie';

type MovieAction = {
  type: string;
  movies?: Movie[];
  topMovies?: Movie[];
  newMovies?: Movie[];
};

export type StateType = {
  movies: Movie[] | [];
  topMovies: Movie[] | [];
};

export const initialState = {
  movies: [],
  topMovies: [],
  newMovies: [],
};

export const movieReducer = (
  state: StateType = initialState,
  action: MovieAction,
) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };

    case SET_TOP100_MOVIES:
      return {
        ...state,
        topMovies: action.topMovies,
      };

    case SET_NEW_MOVIES:
      return {
        ...state,
        newMovies: action.newMovies,
      };
    default:
      return state;
  }
};
