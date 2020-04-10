import React from 'react';
import className from 'classnames';

import './authForm.scss';

export default (props: {
  Submit?: (e: any) => void;
  children?: any;
  className?: string;
}) => {
  return (
    <div className="auth">
      <form onSubmit={props.Submit} className={className(props.className)}>
        {props.children}
      </form>
    </div>
  );
};
