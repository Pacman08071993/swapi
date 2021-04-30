import './Header.css';
import Button from '../../../baseComponent/Button/Button';
import { getDataPeople, getDataStarships, getDataPlanets } from '../../../state/actions/actions';
import { connect } from 'react-redux';
import swapi from '../../../Service';

const Header = props => (
  <div className='Header'>
    <Button title='People' getData={props.onGetPeople} />
    <Button title='Planets' getData={props.onGetPlanets} />
    <Button title='Starship' getData={props.onGetStarships} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  onGetPeople: () => dispatch(getDataPeople(swapi)()),
  onGetPlanets: () => dispatch(getDataPlanets(swapi)()),
  onGetStarships: () => dispatch(getDataStarships(swapi)())
});

export default connect(null, mapDispatchToProps)(Header);