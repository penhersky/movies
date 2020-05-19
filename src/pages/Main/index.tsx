import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { MovieCard, Slick } from '../../components';
import { Message } from '../../fragments';

import './main.scss';

export default (props: { loading: boolean; error: boolean }) => {
  document.title = 'Space movies | Main';
  const { newMovies } = useSelector((state: any) => state.movieReducer);

  const scroll = useRef<HTMLDivElement>(document.createElement('div'));
  const title = useRef<HTMLHeadingElement>(document.createElement('h1'));

  document.addEventListener('scroll', () => {
    try {
      const scrollY = window.scrollY;
      if (scrollY !== 0) {
        title.current.style.display = 'none';
        scroll.current.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
      } else {
        scroll.current.style.backgroundPosition = '';
        title.current.style.display = 'initial';
      }
    } catch {}
  });

  return (
    <div className='main'>
      <h1 id='main-hat-title' ref={title}>
        Space
      </h1>
      <div id='parallax' ref={scroll}>
        <span>Movies</span>
      </div>
      <div className='main-body'>
        <div className='main-new-movies'>
          <div className='new-movies-title'>
            <h3>New</h3>
          </div>
          {props.error ? (
            <Message
              title='Load movie list error!'
              body='Please reload this page.'
              type='warning'
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Slick>
              {props.loading
                ? []
                : newMovies.map((movie: any) => (
                    <span className='card wiper-slide' key={movie.id}>
                      <MovieCard data={movie} />
                    </span>
                  ))}
            </Slick>
          )}
        </div>

        <div className='body-text'>
          <div id='main-text'>
            <h1>Terms of use</h1>
            <p>
              1. All used audiovisual materials, links to which are posted on
              the website, are the property of their manufacturer (owner of
              rights) and are protected by international legal conventions.
            </p>
            <p>
              2. You can use these materials only if the use is made for
              educational purposes. These materials are intended for
              informational purposes only - for other purposes you must buy a
              licensed entry.
            </p>
            <p>
              3. All links to resources on the Web that contain videos and other
              intellectual property are posted for free by visitors of the
              resource for advertising or for informational purposes. Any
              information on the site is automatically posted without any
              control from any side, which corresponds to the generally accepted
              world practice of posting information on the Internet.
            </p>
            <p>
              4. The subject of the commercial aspect of this resource is the
              maintenance and development of infrastructure that allows you to
              most comfortably view demo audiovisual products, regardless of
              what is being watched. The video materials presented on the
              resource are not the subject of financial relations between users
              and site owners.
            </p>
            <p>
              5. Using this resource, the user agrees that he is 18 years old
              and assumes the risks associated with the possible harm caused by
              the use of information in published materials.
            </p>
            <p>
              5. This resource was created exclusively for non-commercial
              purposes. And does not bring any financial benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
