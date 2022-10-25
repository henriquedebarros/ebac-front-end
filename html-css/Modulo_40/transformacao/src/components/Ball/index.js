import React from 'react';
import './ball.scss';

function Ball(props) {
  return (
    <div className={"ball ball--" + props.type}></div>
  )
}

export default Ball