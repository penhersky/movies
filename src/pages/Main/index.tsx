import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Particles from 'react-particles-js';
import { Button, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { MovieCard, Slick } from '../../components';
import { Message } from '../../fragments';

import logo from '../../image/logo.svg';

import './main.scss';

export default (props: { loading: boolean; error: boolean }) => {
  const history = useHistory();
  document.title = 'Space movies | Main';
  const { newMovies } = useSelector((state: any) => state.movieReducer);

  const params = {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      line_linked: {
        enable: true,
        opacity: 0.02,
      },
      move: {
        enable: true,
        speed: 2,
        random: true,
        straight: false,
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 },
      },
      size: {
        value: 3,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: 'push',
        },
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };

  const onChangeHandler = () => {
    history.push('/library');
  };

  return (
    <div className='main'>
      <div>
        <div className='main-hat'>
          <img src={logo} alt='Space Movies' className='hat-logo' />
          <h4 id='hat-sub'>
            Space of new movies, ratings of the best films from professionals,
            statistics, descriptions of films and a lot of useful information
            about what to watch in the evening.
          </h4>
          <Button
            variant='outlined'
            color='secondary'
            size='large'
            style={{ width: 300 }}
            onClick={onChangeHandler}
          >
            GO TO MOVIES
            <ArrowForwardIosIcon style={{ fontSize: 20, margin: 5 }} />
          </Button>
        </div>

        <Particles className='parallax' params={params} />
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
            <Typography variant='h4'>Terms of use</Typography>
            <Typography>
              1. All used audiovisual materials, links to which are posted on
              the website, are the property of their manufacturer (owner of
              rights) and are protected by international legal conventions.
            </Typography>
            <Typography>
              2. You can use these materials only if the use is made for
              educational purposes. These materials are intended for
              informational purposes only - for other purposes you must buy a
              licensed entry.
            </Typography>
            <Typography>
              3. All links to resources on the Web that contain videos and other
              intellectual property are posted for free by visitors of the
              resource for advertising or for informational purposes. Any
              information on the site is automatically posted without any
              control from any side, which corresponds to the generally accepted
              world practice of posting information on the Internet.
            </Typography>
            <Typography>
              4. The subject of the commercial aspect of this resource is the
              maintenance and development of infrastructure that allows you to
              most comfortably view demo audiovisual products, regardless of
              what is being watched. The video materials presented on the
              resource are not the subject of financial relations between users
              and site owners.
            </Typography>
            <Typography>
              5. Using this resource, the user agrees that he is 18 years old
              and assumes the risks associated with the possible harm caused by
              the use of information in published materials.
            </Typography>
            <Typography>
              5. This resource was created exclusively for non-commercial
              purposes. And does not bring any financial benefits.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
