import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GET_MOVIE } from '../../types/movie';

import './movie.scss';

export default (props: any) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();

  const movies = useSelector((store: any) => store.movieReducer);

  useEffect(() => {
    dispatch({ type: GET_MOVIE, id });
  }, [dispatch, id]);

  return (
    <div className="padding-top">
      <h1>{movies.openMovie.title}</h1>
    </div>
  );
};
