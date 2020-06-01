import {
  SET_TOP100_MOVIES,
  SET_ACTIVE_TOP100_PAGE,
  SET_GENDER_TOP100,
  Movie,
} from '../types/movie';

type MovieAction = {
  type: string;
  activeTopPage?: number;
  topMovies?: Movie[];
  genre?: number;
};

export type StateType = {
  activeTopPage: number;
  topMovies: Movie[] | [];
  genre: number;
};

export const initialState = {
  activeTopPage: 1,
  topMovies: [],
  genre: 0,
};

export const topMovieReducer = (
  state: StateType = initialState,
  action: MovieAction,
) => {
  switch (action.type) {
    case SET_TOP100_MOVIES:
      return {
        ...state,
        topMovies: action.topMovies,
      };

    case SET_ACTIVE_TOP100_PAGE:
      return {
        ...state,
        activeTopPage: action.activeTopPage,
      };

    case SET_GENDER_TOP100:
      return {
        ...state,
        genre: action.genre,
      };

    default:
      return state;
  }
};
