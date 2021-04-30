import './List.css';
import { connect } from 'react-redux';
import ListItem from './ListItem/ListItem';

const List = props => (
  <div className='List'>
    {props.data.length > 0
      ? props.data.map((item, index) => <ListItem name={item.name} key={index} />)
      : null
    }
  </div>
);

const mapStateToProps = state => ({ data: state.data });


export default connect(mapStateToProps, null)(List);