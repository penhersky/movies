import React, { useCallback } from 'react';
import { Card, CardActionArea, CardMedia, Tooltip } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Rating } from '@material-ui/lab';

import { useSnackbar } from 'notistack';

import './movie-card.scss';

export default ({ data, className }: { data: any; className?: string }) => {
  const { enqueueSnackbar } = useSnackbar();

  const add = useCallback(() => {
    enqueueSnackbar('Movies added to "Will watch"', {
      variant: 'success',
      anchorOrigin: { vertical: 'top', horizontal: 'left' },
    });
  }, [enqueueSnackbar]);

  return (
    <Card className={classNames('movie-card', className)}>
      <CardActionArea className="movie-card">
        <div className="add-watch" onClick={add}>
          <Tooltip title='add to "Will watch"' placement="bottom">
            <LibraryAddIcon fontSize="large" />
          </Tooltip>
        </div>
        <NavLink to={`/library/movie/${data.id}`} style={{ textDecoration: 'none' }}>
          <div className="card-content">
            <div className="card-hover">
              <CardMedia
                component="img"
                alt="..."
                height="400"
                image={data.poster}
                className="card-image"
              />
            </div>
            <div className="card-inf">
              <h2>{data.title}</h2>
              <div className="card-data">
                <Rating
                  size="small"
                  name="half-rating-read"
                  defaultValue={data.rating}
                  precision={0.1}
                  className="rating"
                  max={10}
                  readOnly
                />
                <p>{data.realizeData}</p>
              </div>
            </div>
          </div>
        </NavLink>
      </CardActionArea>
    </Card>
  );
};
