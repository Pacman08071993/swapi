import React from 'react';
import Button from '../../../baseComponent/Button/Button';
import './Header.css';

const Header = ({ getPeople, getPlanets, getStarship }) => (
  <div className='Header'>
    <Button title='People' getData={getPeople} />
    <Button title='Planets' getData={getPlanets} />
    <Button title='Starship' getData={getStarship} />
  </div>
);
export default Header;