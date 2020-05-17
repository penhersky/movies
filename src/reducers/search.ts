import { SET_SEARCH_MOVIES } from '../types/movie';

type SearchAction = {
  type: string;
  search: string;
};

export type StateType = {
  search: string;
};

export const initialState = {
  search: '',
};

export const searchReducer = (
  state: StateType = initialState,
  action: SearchAction,
) => {
  switch (action.type) {
    case SET_SEARCH_MOVIES:
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
};
