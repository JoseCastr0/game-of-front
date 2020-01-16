import React from 'react';
import Characters from '../pages/Characters';
import Header from './shared/Header';
import Home from '../pages/Home';
import Houses from '../pages/Houses';
import MainMenu from './shared/MainMenu';
import Timeline from '../pages/Timeline';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../styles/styles.scss';

function App() {
  const { i18n } = useTranslation();

  function handleLangClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="App">
      <Router>
        <div>
          <Header changeLang={handleLangClick} />
          <Switch>            
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/houses">
              <Houses />
            </Route>
            <Route path="/chronology">
              <Timeline />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>          
          <MainMenu />
        </div>
      </Router>
    </div>
  );
}

export default App;
