import {
  GET_MOVIE,
  SET_MOVIES,
  SET_NEW_MOVIES,
  SET_TOP100_MOVIES,
  Movie,
} from '../types/movie';

type MovieAction = {
  type: string;
  id?: string;
  movies?: Movie[];
  topMovies?: Movie[];
  newMovies?: Movie[];
};

export type StateType = {
  movies: Movie[] | [];
  topMovies: Movie[] | [];
  openMovie: Movie;
};

export const initialState = {
  movies: [],
  topMovies: [],
  newMovies: [],
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
        openMovie: [
          ...state.movies,
          ...state.topMovies,
        ].find((value: any, index: number) => (value.id === action.id ? value : 0)),
      };
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
