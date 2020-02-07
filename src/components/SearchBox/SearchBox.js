import React from 'react';
import './searchBox.scss';
import { useTranslation } from 'react-i18next';

function SearchBox({searchChange}) {
  const { t } = useTranslation();
  return (
    <div className='c-search-box'>
      <input
        className='c-search-box__input'
        type='search'
        placeholder={t('search')}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;