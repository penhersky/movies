import React from 'react';

import './movie.scss';

export default (props: any) => {
  console.log(props.match.params.id);
  return <div>Movie page</div>;
};
