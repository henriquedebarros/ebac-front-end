import React from 'react';
import './listItem.scss';

function ListItem(props) {
  let source = require("../../images/" + props.data.icon + ".png");

  return (
    <li className="listItem">
      <div className="listItem__icon" style={{backgroundColor: props.data.color}}>
        <img src={source} alt="Ícone para " />
      </div>
      <h3 className="listItem__title">{props.data.title}</h3>
      <p className="listItem__body">{props.data.body}</p>
    </li>
  )
}

export default ListItem