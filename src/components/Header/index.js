import './styles.scss';
import Title from '../Title';
import Form from './Form';

const Header = () => (
  <div className='header-container'>
    <Title className='header-title' content='Converter'/>
    <Form/>
  </div>
);

export default Header;



