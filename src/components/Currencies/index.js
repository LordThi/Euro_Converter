import './styles.scss';
import Currency from './Currency';
import PropTypes from 'prop-types';
import data from '../../data/currencies'
import Title from '../Title';


const Currencies = () => (
  <>
  <Title className='currencies-title' content='Currencies'/>
  <ul className='currencies-container'>
    {
      data.map((currency) => <Currency key={currency.name} name={currency.name} />)
    }
  </ul>
  </>
);

export default Currencies;

Currencies.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  )
};
