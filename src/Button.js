import React from 'react';

function Button({classname, text, click }) {
  return (
    <button className={classname} onClick={click}>{text}</button>
  )
}

export default Button;