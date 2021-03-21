import { API_KEY } from './api';

export const defaultLibrary = (
  page: number,
  voteCountGte = 10,
): string => `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_date.lte=now
&vote_count.gte=${voteCountGte}&page=${page}`;

export const libraryUrl = (
  page: number,
  genre = 0,
  voteAverage = [0, 10],
  sortBy = { by: 'primary release date', type: 'desc' },
): string => {
  const url = new URLSearchParams();
  url.append('api_key', API_KEY);
  url.append('language', 'en-US');
  url.append('sort_by', `${sortBy.by.split(' ').join('_')}.${sortBy.type}`);
  url.append('primary_release_date.lte', 'now');
  url.append('vote_count.gte', `10`);
  url.append('with_genres', genre !== 0 ? genre.toString() : '');
  url.append('page', page.toString());
  url.append('vote_average.gte', voteAverage[0].toString() + '.0');
  url.append('vote_average.lte', voteAverage[1].toString() + '.0');
  return `discover/movie?` + url.toString();
};

export const topMovie = (
  page: number,
  genre = 0,
  voteCountGte = 11000,
): string => {
  const url = new URLSearchParams();
  url.append('api_key', API_KEY);
  url.append('language', 'en-US');
  url.append('sort_by', `vote_average.desc`);
  url.append('vote_count.gte', voteCountGte.toString());
  url.append('with_genres', genre !== 0 ? genre.toString() : '');
  url.append('page', page.toString());
  return `discover/movie?` + url.toString();
};

export const getMovieById = (id: number) => {
  return `movie/${id}?api_key=${API_KEY}`;
};

export const searchMovie = (text: string, page = 1) => {
  return `search/movie?api_key=${API_KEY}&query=${text}&page=${page}`;
};

// additionally

export const getMovieVideo = (id: number) => {
  return `movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
};
