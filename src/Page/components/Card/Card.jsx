import React from 'react';
import ListItem from '../List/ListItem/ListItem';

import './Card.css';

const Card = ({ data }) => Object.entries(data).map(([key, value], index) => <li key={index}>{key}: {value}</li>);

export default Card;