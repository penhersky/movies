import React, { useEffect, useState } from 'react';
import ReactGa from 'react-ga';
import { useSelector, useDispatch } from 'react-redux';

import ClearIcon from '@material-ui/icons/Clear';
import FindReplaceIcon from '@material-ui/icons/FindReplace';

import { MovieList, Pagination, Surface, SEO } from '../../components';
import {
  Parallax,
  Spinner,
  IconButton,
  RadioButtons,
  RangeSlider,
  SortBy,
  Genre,
  Title,
} from '../../fragments';

import { libraryUrl, defaultLibrary } from '../../utils/createUrl';
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

  const dispatch = useDispatch();

  const [fetchData, data, loading, error] = useLazyFetch({
    ...initialState,
    total_pages: countPages,
  });

  useEffect(() => {
    if (data.pages <= 0) return;
    dispatch({ type: SET_MOVIES, movies: data.results });
  }, [data, dispatch]);

  useEffect(() => {
    if (countPages !== data.total_pages) {
      dispatch({ type: SET_COUNT_PAGE, countPages: data.total_pages });
    }
  }, [data.total_pages, countPages, dispatch]);

  const getPage = (page: number) => {
    dispatch({ type: SET_ACTIVE_PAGE, activePage: page });
    fetchData(
      libraryUrl(page, genre, voteAverage, {
        by: sortLocalType,
        type: sortBY,
      }),
      'GET',
    );
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

    ReactGa.event({
      category: 'click',
      action: `click genre: ${
        genres.find((item: any) => item.id === id)?.name
      }`,
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
    fetchData(defaultLibrary(1), 'GET');
  };

  return (
    <>
      <SEO
        title={`${activePage} | Library with the best and latest movies.`}
        description={`Library with the best and latest movies. ${movies
          .slice(0, 5)
          .map((item: any) => item.title)
          .join(', ')}`}
        keywords={[
          'Space Movies',
          'movies',
          'movie trailers',
          'descriptions of movie premieres',
          'movie ratings',
          'movie library',
        ]}
      />
      {loading ? <Spinner /> : null}
      <div>
        <Parallax img={image} title='Library' opacity={0.5} />
      </div>
      <div className='container'>
        <div className='content'>
          <Surface>
            <div className='library-sort'>
              <div className='hat-library-sort'>
                <Title>Sort By</Title>
                <SortBy
                  label={sortTypes.releaseDate}
                  isChecked={sortLocalType === sortTypes.releaseDate}
                  onChecked={onChangeSortVoteAverage}
                  value={sortBY}
                />
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
              </div>
              <Title>Vote average</Title>
              <RangeSlider
                value={LocalVoteAverage}
                onChange={onChangeVoteAverage}
                width={200}
              />
            </div>
            <Title>Genre</Title>
            <RadioButtons
              list={genres}
              onChange={onChangeGenres}
              value={genre}
              Checkbox={Genre}
            />
            <div className='button-group'>
              <IconButton Icon={ClearIcon} onClick={clear} tooltip='Clear' />
              <IconButton
                Icon={FindReplaceIcon}
                onClick={find}
                tooltip='Find or refresh'
              />
            </div>
          </Surface>
          <MovieList
            movies={movies}
            error={props.error || error}
            typeMessage='warning'
            bodyMessage='No movies found. Please try again.'
            titleMessage='Something went wrong ('
          />
        </div>
        <Pagination
          activePage={activePage}
          countPage={countPages}
          newPage={getPage}
        />
      </div>
    </>
  );
};
