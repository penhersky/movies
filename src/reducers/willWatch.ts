import {
  ADD_TO_WILL_WATCH,
  DELETE_FROM_WILL_WATCH,
  SET_WILL_WATCH,
} from '../types/movie';

type WillWatchAction = {
  type: string;
  id: string;
  title?: string;
  poster_path?: string;
  vote_average?: number;
  release_date?: string;
  listWillWatch?: WillWatch[];
};

export type WillWatch = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

type StateType = {
  willWatch: WillWatch[] | [];
};

export const initialState = {
  willWatch: [],
};

export const willWatchReducer = (
  state: StateType = initialState,
  action: WillWatchAction,
) => {
  switch (action.type) {
    case ADD_TO_WILL_WATCH: {
      return {
        willWatch: [
          ...state.willWatch,
          {
            id: action.id,
            title: action.title,
            poster: action.poster_path,
            rating: action.vote_average,
            realizeData: action.release_date,
          },
        ],
      };
    }

    case DELETE_FROM_WILL_WATCH:
      return {
        willWatch: state.willWatch.filter((item) => item.id !== action.id),
      };
    case SET_WILL_WATCH:
      return {
        willWatch: action.listWillWatch,
      };
    default:
      return state;
  }
};
