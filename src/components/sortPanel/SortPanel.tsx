import React from 'react';

import { Select } from '../../fragments';

import './sort-panel.scss';

export default (props: {
  genre: string;
  genreHandler: (genres: string) => void;
}) => {
  return (
    <div className="sort-panel">
      <Select
        defaultValue="genres"
        value={props.genre}
        label="genres"
        handler={props.genreHandler}
        list={[]}
      />
    </div>
  );
};
