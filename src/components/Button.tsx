import React from 'react';
import './Button.css';

interface IButton {
  children: React.ReactNode;
  callback: () => void;
}
function Button({ children, callback }: IButton) {
  return (
    <button className="Btn" onClick={callback}>
      {children}
    </button>
  );
}

export default Button;
