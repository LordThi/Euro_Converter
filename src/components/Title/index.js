import './styles.scss';
import Proptypes from 'prop-types';

const Title = ({ content, className })=>(
  <h1 className={className}>{ content }</h1>
);

export default Title;

Title.propTypes = {
  content: Proptypes.string.isRequired,
  className: Proptypes.string.isRequired,
};
