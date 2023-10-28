import React from 'react';
import './Button.css';

interface IButton {
  children: React.ReactNode;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  styleIdx?: number;
  sizeIdx?: number;
  disabled?: boolean;
}
const STYLE = ['', 'primary', 'square'];
const SIZE = ['', 'md', 'lg'];
function Button({
  children,
  callback,
  styleIdx = 0,
  sizeIdx = 0,
  disabled = false,
}: IButton) {
  return (
    <button
      className={`${STYLE[styleIdx]} ${SIZE[sizeIdx]} Btn`}
      onClick={callback}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
