import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './characters.scss';
import LogoHouse from '../components/logoHouse/LogoHouse';

function CharacterDetail() {
    let { slug } = useParams();
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://api.got.show/api/show/characters/bySlug/${slug}`)
          .then(res => res.json())
          .then(setDetails)
    }, []);
    

    return (
        <main className='c-details'>
            <div className=''>
                <img 
                    className=''
                    src={details.image} 
                    alt={details.name}
                />
                <h2>{details.name}</h2>
                <section className='c-details__info-wrapper'>
                    <div className='c-details__info-col'>
                        <h3>{t('houses')}</h3>
                        <LogoHouse
                            characterName={details.house}
                        />
                    </div>
                    <div className='c-details__info-col'>
                        <h3>{t('houses')}</h3>
                        <ul>
                            {
                                details.allegiances && details.allegiances.map(el => {
                                    return <li key={el}>{el}</li>
                                })
                            }
                            <li></li>
                        </ul>
                    </div>
                </section>
            </div>

        </main>
    );
}

export default CharacterDetail;