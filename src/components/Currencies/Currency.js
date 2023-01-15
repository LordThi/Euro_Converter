import PropTypes from 'prop-types';

const Currency = ({
  name,
}) => (
  <li className="currency">
    { name }
  </li>
);

export default Currency;

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};
