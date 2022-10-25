import React from 'react';
import './cards.scss';

function Card(props) {
  return (
    <li className="card">
        <span className="card__marker">0{props.index + 1}</span>
        <h3 className="card__title">{props.title}</h3>
        <p className="card__body">{props.body}</p>
    </li>
  )
}

export default Card