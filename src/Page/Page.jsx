/* eslint no-console: 0 */
import { Component } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Card from './components/Card/Card';
import './Page.css';

class Page extends Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <List />
        <Card />
      </div>
    );
  }
}


export default Page;