import React from 'react';
import { useSelector } from 'react-redux';

import { MovieCard, Slick } from '../../components';

import './main.scss';

export default () => {
  const { newMovies } = useSelector((state: any) => state.movieReducer);

  return (
    <div className="main">
      <div id="parallax">
        <h1>Movies</h1>
      </div>
      <div className="main-body">
        <div className="main-new-movies">
          <div className="new-movies-title">
            <h3>New</h3>
          </div>
          <Slick>
            {newMovies.map((movie: any) => (
              <div className="card" key={movie.id}>
                <MovieCard data={movie} />
              </div>
            ))}
          </Slick>
        </div>

        <div className="body-text">
          <div id="main-text">
            <h1>Terms of use</h1>
            <p>
              1. All used audiovisual materials, links to which are posted on the website,
              are the property of their manufacturer (owner of rights) and are protected
              by international legal conventions.
            </p>
            <p>
              2. You can use these materials only if the use is made for educational
              purposes. These materials are intended for informational purposes only - for
              other purposes you must buy a licensed entry.
            </p>
            <p>
              3. All links to resources on the Web that contain videos and other
              intellectual property are posted for free by visitors of the resource for
              advertising or for informational purposes. Any information on the site is
              automatically posted without any control from any side, which corresponds to
              the generally accepted world practice of posting information on the
              Internet.
            </p>
            <p>
              4. The subject of the commercial aspect of this resource is the maintenance
              and development of infrastructure that allows you to most comfortably view
              demo audiovisual products, regardless of what is being watched. The video
              materials presented on the resource are not the subject of financial
              relations between users and site owners.
            </p>
            <p>
              5. Using this resource, the user agrees that he is 18 years old and assumes
              the risks associated with the possible harm caused by the use of information
              in published materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
