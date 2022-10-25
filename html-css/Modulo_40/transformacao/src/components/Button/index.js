import React from 'react';
import './button.scss';

function Button(props) {
  return (
    <button onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default Button