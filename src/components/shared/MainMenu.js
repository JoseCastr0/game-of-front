import React from 'react';
import { Link } from "react-router-dom";
import './mainMenu.scss';

const MainMenu = () => {
    return(
        <nav className='c-main-menu'>
            <ul className='c-main-menu__menu'>
                <li className='c-main-menu__item'>
                    <Link to="/characters">Characters</Link>
                </li>
                <li className='c-main-menu__item'>
                    <Link to="/houses">Houses</Link>
                </li>
                <li className='c-main-menu__item'>
                    <Link to="/chronology">Chronology</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;