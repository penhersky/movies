import { GET_MOVIE, Movie } from '../types/movie';

import movie from '../temp';

type MovieAction = {
  type: string;
  id: string;
};

type StateType = {
  movies: Movie[] | [];
};

export const initialState = {
  movies: movie,
};

export const movieReducer = (state: StateType = initialState, action: MovieAction) => {
  switch (action.type) {
    case GET_MOVIE:
      return state.movies.find(({ id }: any, index: number) =>
        id === action.id ? index : 0,
      );

    default:
      return state;
  }
};
