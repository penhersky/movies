import {
  SET_TOP100_MOVIES,
  SET_ACTIVE_TOP100_PAGE,
  Movie,
} from '../types/movie';

type MovieAction = {
  type: string;
  activeTopPage?: number;
  topMovies?: Movie[];
};

export type StateType = {
  activeTopPage: number;
  topMovies: Movie[] | [];
};

export const initialState = {
  activeTopPage: 1,
  topMovies: [],
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

    default:
      return state;
  }
};
