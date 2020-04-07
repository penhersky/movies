import React from 'react';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Rating } from '@material-ui/lab';

import './movie-card.scss';

export default (props: {
  id: string;
  title: string;
  poster: string;
  rating: number;
  data: String;
}) => {
  return (
    <Card className="movie-card">
      <CardActionArea className="movie-card">
        <NavLink to={`/library/movie/${props.id}`}>
          <div className="card-content">
            <CardMedia
              component="img"
              alt="..."
              height="400"
              image={props.poster}
              className="card-image"
            />
            <div className="card-inf">
              <h2>{props.title}</h2>
              <div className="card-data">
                <Rating
                  size="small"
                  name="half-rating-read"
                  defaultValue={props.rating}
                  precision={0.1}
                  className="rating"
                  max={10}
                  readOnly
                />
                <p>{props.data}</p>
              </div>
            </div>
          </div>
        </NavLink>
      </CardActionArea>
    </Card>
  );
};
