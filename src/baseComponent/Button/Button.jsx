import './Button.css';

const Button = ({ title, getData }) => (
  <button className='Button' onClick={() => getData()}>{title}</button>
);

export default Button;