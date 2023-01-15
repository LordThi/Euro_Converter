import './styles.scss';
import Title from '../Title';
import Text from '../Text';
import Header from '../Header';
import data from '../../data/currencies';

const Result = () => (
  <div className='result-container'>
    <Title className='result-title' content='1.09' />
    <Text className='result-text' content='US' />
  </div>
);

export default Result;
