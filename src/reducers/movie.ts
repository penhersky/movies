import {
  SET_MOVIES,
  SET_NEW_MOVIES,
  SET_ACTIVE_PAGE,
  SET_COUNT_PAGE,
  Movie,
} from '../types/movie';

type MovieAction = {
  type: string;
  movies?: Movie[];
  activePage?: number;
  countPages?: number;
  newMovies?: Movie[];
};

export type StateType = {
  movies: Movie[] | [];
  activePage: number;
  countPages: number;
  newMovies: Movie[];
};

export const initialState = {
  movies: [],
  activePage: 1,
  countPages: 500,
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
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage,
      };
    case SET_COUNT_PAGE:
      return {
        ...state,
        countPages: action.countPages,
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
