/* eslint no-console: 0 */
import React from 'react';
import './List.css';
import ListItem from './ListItem/ListItem';

const List = ({ data, showMore }) => (
  <div className='List'>{data === null
    ? null
    : data.map((item, index) => <ListItem name={item.name} showMore={showMore} key={index}/>) }</div>
);


export default List;