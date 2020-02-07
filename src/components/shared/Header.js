import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './header.scss';
import esFlag from '../../imgs/spain_flag.svg';
import ukFlag from '../../imgs/uk_flag.svg';
import {
  Link,
  useLocation
} from "react-router-dom";

function Header({ changeLang }) {
  const { t } = useTranslation();

  return (
    <nav className='c-header '>
      <div className='c-header__wrapper container-fluid'>
        <ul className='c-header__menu'>
          {
            useLocation().pathname === '/' ?
            <Fragment>
              <li className='c-header__item' onClick={() => changeLang('en')}><img className='c-header__flag' src={ukFlag} alt='uk flag' /></li>
              <li className='c-header__item' onClick={() => changeLang('es')}><img className='c-header__flag' src={esFlag} alt='spain flag' /></li>
            </Fragment>
            :
            <Fragment>
              <li className='c-header__item'><Link to='/'>{t('home')}</Link></li>
              <li className='c-header__item' onClick={() => changeLang('en')}><img className='c-header__flag' src={ukFlag} alt='uk flag' /></li>
              <li className='c-header__item' onClick={() => changeLang('es')}><img className='c-header__flag' src={esFlag} alt='spain flag' /></li>
            </Fragment> 
          }        
          
        </ul> 
      </div>
    </nav>
  );
}

export default Header;