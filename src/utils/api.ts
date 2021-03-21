const env = process.env;

export const API_KEY = env.REACT_APP_API_KEY as string;

export const API_URL = env.REACT_APP_API_URL as string;

export const IMAGE_URL = env.REACT_APP_IMAGE_URL as string;

export const initialState = {
  dates: [],
  pages: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export default `${API_URL}/`;
