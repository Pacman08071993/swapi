/* eslint no-console: 0 */
import { connect } from 'react-redux';
import './Card.css';

const Card = props => (
  <div>
    { props.card instanceof Object
      ? Object.entries(props.card).map(([key, value], index) => <li key={index}>{key}: {value}</li>)
      : null
    }
  </div>
);

const mapStateToProps = state => ({
  card: state.currentCard
});

export default connect(mapStateToProps)(Card);