import React from 'react';
import { useTranslation } from 'react-i18next';
import './home.scss';

const Home = () => {
  const { t } = useTranslation();
  return (
    <main className='c-home-container'>
        <h1 className='c-home-container__title'>{t('gameof')}</h1>
    </main>
  );
}

export default Home;