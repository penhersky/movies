import { API_KEY } from './api';

export const defaultLibrary = (
  page: number,
  voteCountGte = 10,
): string => `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_date.lte=now
&vote_count.gte=${voteCountGte}&page=${page}`;

export const libraryUrl = (
  page: number,
  additionalData = '',
  genre = 0,
  voteAverage = [0, 10],
): string => {
  const voteAverageQuery = `vote_average.gte=${voteAverage[0]}.0&vote_average.lte=${voteAverage[1]}.0&`;
  const genreQuery = genre !== 0 ? `with_genres=${genre}&` : '';
  return `discover/movie?api_key=${API_KEY}${additionalData}&${genreQuery}${voteAverageQuery}page=${page}`;
};

export const topMovie = (
  page: number,
  genre = 0,
  voteCountGte = 11000,
): string => {
  const genreQuery = genre !== 0 ? `with_genres=${genre}&` : '';
  return `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&${genreQuery}vote_count.gte=${voteCountGte}&page=${page}`;
};

export const getMovieById = (id: number) => {
  return `movie/${id}?api_key=${API_KEY}`;
};

export const searchMovie = (text: string, page = 1) => {
  return `search/movie?api_key=${API_KEY}&query=${text}&page=${page}`;
};
