import './styles.scss';
import Title from '../Title';
import Text from '../Text';
import data from '../../data/currencies';
import Input from '../Header/Input';

const Result = ( ) => (
  <div className='result-container'>
    <Input className='header-input-deported'/>
    {/* N'ayant pas encore vu le state, j'utilise cette methode cosmetique pour utiliser l'entree de l'input */}

    <Text className='result-text' content='US' />
  </div>
);

export default Result;
