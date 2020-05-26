import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ClearIcon from '@material-ui/icons/Clear';

import { Pagination, MovieList, SortPanel } from '../../components';
import { Parallax, Spinner, RadioButtons, IconButton } from '../../fragments';

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
    if (id === genre) return;
    dispatch({
      type: SET_GENDER_TOP100,
      gender: id,
    });
    dispatch({ type: SET_ACTIVE_TOP100_PAGE, activeTopPage: 1 });
    fetchData(topMovie(1, id, 200), 'GET');
  };

  const clear = () => {
    if (0 === genre) return;
    dispatch({
      type: SET_GENDER_TOP100,
      gender: 0,
    });
    dispatch({ type: SET_ACTIVE_TOP100_PAGE, activeTopPage: 1 });
    fetchData(topMovie(1), 'GET');
  };

  return (
    <>
      {loading ? <Spinner /> : null}
      <Parallax title='top 100 movies' img={img} opacity={0.6} />
      <div className='content'>
        <SortPanel>
          <RadioButtons list={genres} onChange={onChangeGenres} value={genre} />
          <IconButton Icon={ClearIcon} onClick={clear} />
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
