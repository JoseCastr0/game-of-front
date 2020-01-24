import React from 'react';
import { useTranslation } from 'react-i18next';
import './header.scss';
import esFlag from '../../imgs/spain_flag.svg';
import ukFlag from '../../imgs/uk_flag.svg';

function Header({ changeLang }) {
  const { t } = useTranslation();
  
  return (
    <nav className='c-header container'>
      <ul className='c-header__menu'>
        <li className='c-header__item'>{t('home')}</li>
        <li className='c-header__item' onClick={() => changeLang('es')}><img className='c-header__flag' src={esFlag} alt='spain flag' /></li>
        <li className='c-header__item' onClick={() => changeLang('en')}><img className='c-header__flag' src={ukFlag} alt='uk flag' /></li>
      </ul> 
    </nav>
  );
}

export default Header;