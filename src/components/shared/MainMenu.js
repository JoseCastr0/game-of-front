import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './mainMenu.scss';

const MainMenu = () => {
    const { t } = useTranslation();
    return(
        <nav className='c-main-menu container'>
            <ul className='c-main-menu__menu o-pad-l--m o-pad-r--m'>
                <li className='c-main-menu__item c-main-menu__item--left'>
                    <Link to="/characters">{t('characters')}</Link>
                </li>
                <li className='c-main-menu__item'>
                    <Link to="/houses">{t('houses')}</Link>
                </li>
                <li className='c-main-menu__item c-main-menu__item--right'>
                    <Link to="/chronology">{t('timeline')}</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;