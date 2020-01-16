import React from 'react';
import { useTranslation } from 'react-i18next';
import './header.scss';

function Header({ changeLang }) {
  const { t } = useTranslation();
  
  return (
    <nav className='c-header'>
      <ul className='c-header__menu'>
        <li className='c-header__item'>{t('home')}</li>
        <li className='c-header__item' onClick={() => changeLang('es')}>ES</li>
        <li className='c-header__item' onClick={() => changeLang('en')}>EN</li>
      </ul> 
    </nav>
  );
}

export default Header;