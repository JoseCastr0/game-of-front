import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './mainMenu.scss';

const MainMenu = () => {
    const { t } = useTranslation();
    return(
        <nav className='c-main-menu'>
            <ul className='c-main-menu__menu'>
                <li className='c-main-menu__item'>
                    <Link to="/characters">{t('characters')}</Link>
                </li>
                <li className='c-main-menu__item'>
                    <Link to="/houses">{t('houses')}</Link>
                </li>
                <li className='c-main-menu__item'>
                    <Link to="/chronology">{t('timeline')}</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;