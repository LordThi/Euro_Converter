import './styles.scss';
import Proptypes from 'prop-types';

const Text = ({ content, className })=>(
  <p className={ className }>{ content }</p>
);

export default Text;

Text.propTypes = {
  content: Proptypes.string.isRequired,
  className: Proptypes.string.isRequired,
};
