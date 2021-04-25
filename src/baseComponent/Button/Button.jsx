import React from 'react';
import './Button.css';

const Button = ({ title, name, getData }) => (
  <button className='Button' onClick={() => getData(name)}>{title}</button>
);

export default Button;
