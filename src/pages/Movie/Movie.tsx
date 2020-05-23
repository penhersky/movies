import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { getMovieById } from '../../utils/createUrl';

import { Rating } from '@material-ui/lab';

import { Loading } from '../../components';
import { Message, Parallax } from '../../fragments';

import './movie.scss';
import { IMAGE_URL } from '../../utils/api';

import { initialState } from '../../reducers/openMovie';

import altImage from '../../image/movieAlt.png';
import backAlt from '../../image/backAlt.jpg';

export default (props: any) => {
  const id = props.match.params.id;
  const [movie, setMovie] = useState(initialState);

  const [data, loading, error] = useFetch(getMovieById(+id), initialState);

  document.title = movie.title;

  useEffect(() => {
    setMovie(data);
  }, [data]);

  const showItems = (list: any[]) => (
    <span>{list.map((item: any) => item.name + ', ')}</span>
  );
  return (
    <div className='padding-top'>
      {loading ? <Loading /> : null}
      {error ? (
        <Message
          title='Movie info is temporarily unavailable!'
          body='Please try again later.'
          type='error'
        />
      ) : (
        <>
          <Parallax
            title={movie.title}
            opacity={1}
            imgOpacity={0.15}
            img={
              movie.backdrop_path
                ? `${IMAGE_URL}w500${movie.backdrop_path}`
                : backAlt
            }
          />
          <div className='movie-page'>
            <div className='movie-container'>
              <h2 className='movie-page-title'>{movie.title}</h2>
              {!loading ? (
                <Rating
                  size='large'
                  name='half-rating-read'
                  defaultValue={movie.vote_average}
                  className='movie-rating'
                  precision={0.1}
                  readOnly
                  max={10}
                />
              ) : null}

              <div className='movie-detail-data'>
                <img
                  src={
                    movie.poster_path
                      ? `${IMAGE_URL}w500${movie.poster_path}`
                      : altImage
                  }
                  className='movie-page-poster'
                  alt='...'
                ></img>
                <div className='movie-detail'>
                  <div className='movie-detail-tem'>
                    <p>&ensp;Original title:&ensp; {movie.original_title}</p>
                  </div>
                  <div className='movie-detail-tem'>
                    <p>&ensp;Genres:&ensp; {showItems(movie.genres)}</p>
                  </div>
                  <div className='movie-detail-tem'>
                    <p>
                      &ensp;Production companies:&ensp;
                      {showItems(movie.production_companies)}
                    </p>
                  </div>
                  <div className='movie-detail-tem'>
                    <p>
                      &ensp;Countries:&ensp;
                      {showItems(movie.production_countries)}
                    </p>
                  </div>
                  <div className='movie-detail-tem'>
                    <p>
                      &ensp;Spoken Languages:&ensp;
                      {showItems(movie.spoken_languages)}
                    </p>
                  </div>
                  <div className='movie-detail-tem'>
                    <p>&ensp;Release date:&ensp; {movie.release_date}</p>
                  </div>
                  <div className='movie-detail-tem'>
                    <p>&ensp;Popularity:&ensp; {movie.popularity}</p>
                  </div>
                  <div className='movie-detail-tem'>
                    <p>
                      &ensp;Rating:&ensp;
                      {movie.vote_average + ' / ' + movie.vote_count}
                    </p>
                  </div>
                  <div className='movie-detail-tem'>
                    <p>
                      &ensp;Runtime:&ensp;
                      {movie.runtime}
                    </p>
                  </div>
                  <div className='movie-detail-tem'>
                    <p>
                      &ensp;Homepage:&ensp;
                      <a href={movie.homepage} className='link'>
                        {movie.homepage}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='overview'>
                <h3>Overview</h3>
                <p>&ensp;&ensp;{movie.overview}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
