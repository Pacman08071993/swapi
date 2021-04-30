import './ListItem.css';
import Button from '../../../../baseComponent/Button/Button';
import { connect } from 'react-redux';
import { getDataCard } from '../../../../state/actions/actions';

const ListItem = props => (
  <div className='ListItem'>
    <div className='listItem_inner'>
      <span className='name'>{props.name}</span>
      <Button title='More' name={props.name} getData={() => props.showCard(props.name)}/>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  showCard: name => dispatch(getDataCard(name))
});

export default connect(null, mapDispatchToProps)(ListItem);