import React from 'react';
import './Cta.scss';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--md', 'btn--lg', 'btn--mb', 'btn--wide'];
const COLOR = ['primary', 'purple', 'red', 'green'];

const Cta = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) =>{
    
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Cta;