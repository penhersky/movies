import { API_KEY } from './api';

export const defaultLibrary = (
  page: number,
  voteCountGte = 10,
): string => `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_date.lte=now
&vote_count.gte=${voteCountGte}&page=${page}`;

export const topMovie = (page: number, voteCountGte = 11000): string =>
  `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&page=1&vote_count.gte=${voteCountGte}&page=${page}`;
