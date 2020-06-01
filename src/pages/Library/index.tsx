import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ClearIcon from '@material-ui/icons/Clear';
import FindReplaceIcon from '@material-ui/icons/FindReplace';

import { MovieList, Pagination, SortPanel } from '../../components';
import {
  Parallax,
  Spinner,
  IconButton,
  RadioButtons,
  RangeSlider,
  SortBy,
} from '../../fragments';

import { libraryUrl } from '../../utils/createUrl';
import { initialState } from '../../utils/api';
import { useLazyFetch } from '../../hooks';

import {
  SET_MOVIES,
  SET_ACTIVE_PAGE,
  SET_COUNT_PAGE,
  CLEAR_SORT,
  SET_SORT,
  SET_GENRE,
} from '../../types/movie';

import image from '../../image/library.jpg';
import genres from '../../utils/genresList';

import './index.scss';

const sortTypes = {
  voteAverage: 'vote average',
  voteCount: 'vote count',
  popularity: 'popularity',
  releaseDate: 'primary release date',
};

export default (props: { error: boolean }) => {
  const {
    movies,
    activePage,
    countPages,
    genre,
    voteAverage,
    sortBy,
    sortType,
  } = useSelector((state: any) => state.movieReducer);

  const [LocalVoteAverage, setLocalVoteAverage] = useState(voteAverage);
  const [sortBY, setSortBy] = useState<'desc' | 'asc'>(sortBy);
  const [sortLocalType, setSortLocalType] = useState(sortType);

  document.title = `Space movies | Library | ${activePage}`;

  const dispatch = useDispatch();

  const [fetchData, data, loading, error] = useLazyFetch({
    ...initialState,
    total_pages: countPages,
  });

  useEffect(() => {
    if (data.results.length === 0) return;
    dispatch({ type: SET_MOVIES, movies: data.results });
  }, [data.results, dispatch]);

  useEffect(() => {
    if (countPages !== data.total_pages) {
      dispatch({ type: SET_COUNT_PAGE, countPages: data.total_pages });
    }
  }, [data.total_pages, countPages, dispatch]);

  const getPage = (page: number) => {
    dispatch({ type: SET_ACTIVE_PAGE, activePage: page });
    fetchData(libraryUrl(page, genre, voteAverage), 'GET');
  };

  const onChangeSortVoteAverage = (
    value: 'desc' | 'asc',
    type: string | undefined,
  ) => {
    setSortLocalType(String(type));
    setSortBy(value);
  };

  const onChangeVoteAverage = (value: number[]) => {
    setLocalVoteAverage(value);
  };

  const onChangeGenres = (id: number) => {
    if (genre === id) return;
    dispatch({
      type: SET_GENRE,
      genre: id,
    });
  };

  const find = () => {
    dispatch({
      type: SET_SORT,
      voteAverage: LocalVoteAverage,
      sortBy: sortBY,
      sortType: sortLocalType,
    });

    fetchData(
      libraryUrl(1, genre, LocalVoteAverage, {
        by: sortLocalType,
        type: sortBY,
      }),
      'GET',
    );
  };

  const clear = () => {
    dispatch({
      type: CLEAR_SORT,
    });
    setLocalVoteAverage([0, 10]);
    setSortLocalType(sortTypes.releaseDate);
    setSortBy('desc');
  };

  return (
    <>
      {loading ? <Spinner /> : null}
      <div>
        <Parallax img={image} title='Library' opacity={0.5} />
      </div>
      <div className='content'>
        <SortPanel>
          <div className='library-sort'>
            <div className='hat-library-sort'>
              <SortBy
                label={sortTypes.voteAverage}
                isChecked={sortLocalType === sortTypes.voteAverage}
                onChecked={onChangeSortVoteAverage}
                value={sortBY}
              />
              <SortBy
                label={sortTypes.voteCount}
                isChecked={sortLocalType === sortTypes.voteCount}
                onChecked={onChangeSortVoteAverage}
                value={sortBY}
              />
              <SortBy
                label={sortTypes.popularity}
                isChecked={sortLocalType === sortTypes.popularity}
                onChecked={onChangeSortVoteAverage}
                value={sortBY}
              />
              <SortBy
                label={sortTypes.releaseDate}
                isChecked={sortLocalType === sortTypes.releaseDate}
                onChecked={onChangeSortVoteAverage}
                value={sortBY}
              />
            </div>
            <RangeSlider
              value={LocalVoteAverage}
              label='Vote average'
              onChange={onChangeVoteAverage}
              width={200}
            />
          </div>

          <RadioButtons list={genres} onChange={onChangeGenres} value={genre} />
          <div className='button-group'>
            <IconButton Icon={ClearIcon} onClick={clear} tooltip='Clear' />
            <IconButton
              Icon={FindReplaceIcon}
              onClick={find}
              tooltip='Find or refresh'
            />
          </div>
        </SortPanel>
        <MovieList movies={movies} error={props.error || error} />
        <Pagination
          activePage={activePage}
          countPage={countPages}
          newPage={getPage}
        />
      </div>
    </>
  );
};
