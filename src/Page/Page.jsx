/* eslint no-console: 0 */
import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Swapi from '../Service';
import Card from './components/Card/Card';
import './Page.css';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      currentItem: null
    };
  }

handlerGetPeople = () => {
  Swapi.getPeople()
    .then(r => this.setState({ data: r.results }));
}

handlerGetPlanets = () => {
  Swapi.getPlanets()
    .then(r => this.setState({ data: r.results }));
}

handlerGetStarship = () => {
  Swapi.getStarship()
    .then(r => this.setState({ data: r.results }));
}

handleMoreInfo = name => {
  const { data } = this.state;
  const currentItem = data.find(item => item.name === name);
  console.log(currentItem);
  this.setState({ currentItem });
}

render() {
  return (
    <div className='page'>
      <Header getPeople={this.handlerGetPeople}
        getPlanets={this.handlerGetPlanets}
        getStarship={this.handlerGetStarship}/>
      <div className='main'>
        <List data={this.state.data} showMore={this.handleMoreInfo} />
        {this.state.currentItem === null
          ? null
          : <Card data={this.state.currentItem} />
        }
      </div>
    </div>
  );
}
}


export default Page;