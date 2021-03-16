import React, { useEffect } from 'react';
import ReactGa from 'react-ga';
import { useSelector, useDispatch } from 'react-redux';

import { Pagination, MovieList, SortPanel, SEO } from '../../components';
import { Parallax, Spinner, RadioButtons } from '../../fragments';

import { topMovie } from '../../utils/createUrl';
import { initialState } from '../../utils/api';
import { useLazyFetch } from '../../hooks';

import {
  SET_TOP100_MOVIES,
  SET_ACTIVE_TOP100_PAGE,
  SET_GENDER_TOP100,
} from '../../types/movie';

import img from '../../image/top.jpg';
import genres from '../../utils/genresList';

import { Page } from '../../types/props';
export default (props: Page) => {
  document.title = `Space movies | TOP | ${props.activePage}`;
  const dispatch = useDispatch();

  const { topMovies, activeTopPage, genre } = useSelector(
    (state: any) => state.topMovieReducer,
  );
  const [fetchData, data, loading, error] = useLazyFetch(initialState);

  useEffect(() => {
    if (data.results.length === 0) return;
    dispatch({ type: SET_TOP100_MOVIES, topMovies: data.results });
  }, [data.results, dispatch]);

  const getPage = (page: number) => {
    dispatch({ type: SET_ACTIVE_TOP100_PAGE, activeTopPage: page });

    if (genre !== 0) fetchData(topMovie(page, genre, 200), 'GET');
    else fetchData(topMovie(page), 'GET');
  };

  const onChangeGenres = (id: number) => {
    if (id === genre) {
      dispatch({
        type: SET_GENDER_TOP100,
        genre: 0,
      });
      dispatch({ type: SET_ACTIVE_TOP100_PAGE, activeTopPage: 1 });
      fetchData(topMovie(1), 'GET');
      return;
    }

    dispatch({
      type: SET_GENDER_TOP100,
      genre: id,
    });

    dispatch({ type: SET_ACTIVE_TOP100_PAGE, activeTopPage: 1 });
    fetchData(topMovie(1, id, 200), 'GET');

    ReactGa.event({
      category: 'click',
      action: `click [top] genre: ${
        genres.find((item: any) => item.id === id)?.name
      }`,
    });
  };

  return (
    <>
      <SEO
        title='top 100 best movies of all time. And also for each genre.'
        description={`top 100 best movies of all time. And also for each genre. ${topMovies
          .slice(0, 5)
          .map((item: any) => item.title)
          .join(', ')}`}
        keywords={[
          'Space Movies',
          'movies',
          'movie trailers',
          'descriptions of movie premieres',
          'movie ratings',
          'top 100 movie',
        ]}
      />
      {loading ? <Spinner /> : null}
      <Parallax title='top 100 movies' img={img} opacity={0.6} />
      <div className='content'>
        <SortPanel>
          <RadioButtons list={genres} onChange={onChangeGenres} value={genre} />
        </SortPanel>
        <MovieList movies={topMovies} error={props.error || error} />
        <Pagination
          activePage={activeTopPage}
          countPage={5}
          newPage={getPage}
        />
      </div>
    </>
  );
};
