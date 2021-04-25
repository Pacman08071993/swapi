import React from 'react';
import './ListItem.css';
import Button from '../../../../baseComponent/Button/Button';

const ListItem = ({ name, showMore }) => (
  <div className='ListItem'>
    <div className='listItem_inner'>
      <span className='name'>{name}</span>
      <Button title='More' name={name} getData={showMore}/>
    </div>
  </div>
);


export default ListItem;