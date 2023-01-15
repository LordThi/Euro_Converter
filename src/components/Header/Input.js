import PropTypes from 'prop-types';
import { useState } from 'react';
import Result from '../Result';


const Input = ( {className} ) => {
  const [value, setValue] = useState('');
  const inputValue = value;

  return(
    <>
    <input className={ className } type="number" value={value} onChange={e => setValue(e.target.value)} min='0'/>
    </>
)};

export default Input;
