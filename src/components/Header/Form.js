import PropTypes from 'prop-types';
import Text from '../Text/index';
import Input from './Input';

const Form = () => (
  <div className='form-container'>
    <Input className='form-input'/>
    {/* <Text className='form-text' content='1' /> */}
    <Text className='form-text' content='euros'/>
  </div>
);

export default Form;
