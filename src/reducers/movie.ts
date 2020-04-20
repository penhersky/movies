import { GET_MOVIE, SET_MOVIES, SET_NEW_MOVIES, Movie } from '../types/movie';

type MovieAction = {
  type: string;
  id?: string;
  movies?: Movie[];
  newMovies?: Movie[];
};

type StateType = {
  movies: Movie[] | [];
  openMovie: Movie;
};

export const initialState = {
  movies: [],
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
        openMovie: state.movies.find((value: any, index: number) =>
          value.id === action.id ? value : 0,
        ),
      };
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
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
