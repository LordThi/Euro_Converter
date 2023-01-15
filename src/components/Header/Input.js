import PropTypes from 'prop-types';
import { useState } from 'react';


const Input = ( {className} ) => {
  const [value, setValue] = useState('');
  const constantValue = value;

  return(
    <>
    <input className={ className } type="number" value={value} onChange={e => setValue(e.target.value)} min='0'/>
    <p>Value: {constantValue}</p>
    </>
)};

export default Input;
