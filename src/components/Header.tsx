import React from 'react';
import './Header.css';
import { ReactComponent as TimesIcon } from '../assets/close.svg';

interface IHeader {
  children: React.ReactNode;
  title: string;
  size?: number;
}
function Header({ children, title, size = 0 }: IHeader) {
  return (
    <div className="Header">
      <div className="container">
        <div className="button-section">{children}</div>
        <div className="title">
          <span>{title}</span>
          {size > 0 && <label className="label">{size}</label>}
        </div>
        <div className="button-section times">
          <TimesIcon style={{ width: '22px' }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
