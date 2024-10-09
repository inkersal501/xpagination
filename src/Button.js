import React from 'react';

function Button({classname, disabled, text, click }) {
  return (
    <button className={classname} disabled={disabled} onClick={click}>{text}</button>
  )
}

export default Button;