import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import { useFetch } from '../../../hooks';
import { getMovieVideo } from '../../../utils/createUrl';
import { initialState } from '../../../reducers/openMovie';

import './style.scss';

export default ({ id }: { id: number }) => {
  const [videos, setVideo] = useState<any[]>([]);

  const [data] = useFetch(getMovieVideo(id), initialState);

  useEffect(() => {
    if (data?.results) {
      setVideo(data.results);
    }
  }, [data]);

  return (
    <div className='video-container'>
      {videos.map((video: any, i: number) => (
        <div key={i} className='video'>
          <h4>{video.type}</h4>
          <ReactPlayer
            className='player'
            width={window.innerWidth > 768 ? 600 : 300}
            height={window.innerWidth > 768 ? 300 : 150}
            controls
            url={`https://www.youtube.com/watch?v=${video?.key}`}
          />
        </div>
      ))}
    </div>
  );
};
