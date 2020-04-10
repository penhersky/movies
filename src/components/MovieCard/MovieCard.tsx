import React from 'react';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Rating } from '@material-ui/lab';

import './movie-card.scss';

export default ({ data }: { data: any }) => {
  return (
    <Card className="movie-card">
      <CardActionArea className="movie-card">
        <NavLink to={`/library/movie/${data.id}`}>
          <div className="card-content">
            <CardMedia
              component="img"
              alt="..."
              height="400"
              image={data.poster}
              className="card-image"
            />
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
