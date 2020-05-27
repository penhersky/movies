import {
  SET_MOVIES,
  SET_NEW_MOVIES,
  SET_ACTIVE_PAGE,
  SET_COUNT_PAGE,
  SET_GENRE,
  SET_VOTE_AVERAGE,
  CLEAR_SORT,
  Movie,
} from '../types/movie';

type MovieAction = {
  type: string;
  movies?: Movie[];
  activePage?: number;
  countPages?: number;

  voteAverage: number[];
  genre?: number;

  newMovies?: Movie[];
};

export type StateType = {
  movies: Movie[] | [];
  activePage: number;
  countPages: number;

  voteAverage: number[];
  genre: number;

  newMovies: Movie[];
};

export const initialState = {
  movies: [],
  activePage: 1,
  countPages: 500,

  voteAverage: [0, 10],
  genre: 0,

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

    case SET_GENRE:
      return {
        ...state,
        genre: action.genre,
      };

    case SET_VOTE_AVERAGE:
      return {
        ...state,
        voteAverage: action.voteAverage,
      };

    case CLEAR_SORT:
      return {
        ...state,
        genre: 0,
        voteAverage: [0, 10],
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
