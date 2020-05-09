import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardActionArea, CardMedia, Tooltip } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Rating } from '@material-ui/lab';

import { ADD_TO_WILL_WATCH } from '../../types/movie';

import { IMAGE_URL } from '../../utils/api';

import { useSnackbar } from 'notistack';

import './movie-card.scss';

export default ({ data, className }: { data: any; className?: string }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const add = useCallback(() => {
    dispatch({
      type: ADD_TO_WILL_WATCH,
      id: data.id,
      title: data.title,
      poster_path: data.poster_path,
      vote_average: data.vote_average,
      release_date: data.release_date,
    });
    enqueueSnackbar(`Movie "${data.title}" added to Will watch`, {
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    });
  }, [enqueueSnackbar, dispatch, data]);

  return (
    <Card className={classNames('movie-card', className)}>
      <CardActionArea className="movie-card">
        <div className="add-watch" onClick={add}>
          <Tooltip title='add to "Will watch"' placement="bottom">
            <LibraryAddIcon fontSize="large" />
          </Tooltip>
        </div>
        <NavLink
          to={`/library/movie/${data.id}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="card-content">
            <div className="card-hover">
              <CardMedia
                component="img"
                alt="..."
                height="400"
                image={`${IMAGE_URL}w500${
                  data.poster_path || data.backdrop_path
                }`}
                className="card-image"
              />
            </div>
            <div className="card-inf">
              <h2
                style={{ fontSize: String(data.title).length > 26 ? 18 : 21 }}
              >
                {data.title}
              </h2>
              <div className="card-data">
                <Rating
                  size="small"
                  name="half-rating-read"
                  defaultValue={data.vote_average}
                  className="rating"
                  max={10}
                  readOnly
                />
                <p>{data.release_date}</p>
              </div>
            </div>
          </div>
        </NavLink>
      </CardActionArea>
    </Card>
  );
};
