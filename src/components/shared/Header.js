import React from 'react';
import './header.scss';

const Houses = () => {
  return (
    <nav className='c-header'>
      <ul className='c-header__menu'>
        <li className='c-header__item'>HOME</li>
        <li className='c-header__item'>ES</li>
        <li className='c-header__item'>EN</li>
      </ul> 
    </nav>
  );
}

export default Houses;