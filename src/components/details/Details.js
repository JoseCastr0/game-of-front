import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './details.scss';
import LogoHouse from '../logoHouse/LogoHouse';

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
        <main className='c-details container-fluid'>
            <div className="row c-details__row">
                <div className="col-12">
                    <img
                        className='c-details__main-img'
                        src={details.image}
                        alt={details.name}
                    />
                    <h2>{details.name}</h2>
                </div>
            </div>
            <div className="row c-details__row">
                <div className="col-2 c-details__col">
                    <h3 className='c-details__col-title'>{t('houses')}</h3>
                    <LogoHouse
                        characterName={details.house}
                    />
                </div>
                <div className="col-2 c-details__col">
                    <h3 className='c-details__col-title'>{t('allegiances')}</h3>
                    <ul className='c-details__items-list'>
                        {
                            details.allegiances && details.allegiances.map(el => {
                                return <li className='c-details__item' key={el}>{el}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-2 c-details__col">
                    <h3 className='c-details__col-title'>{t('appearances')}</h3>
                    <ul className='c-details__items-list'>
                        {
                            details.appearances && details.appearances.map(el => {
                                return <li className='c-details__item' key={el}>{el}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-2 c-details__col">
                    <h3 className='c-details__col-title'>{t('father')}</h3>
                    <ul className='c-details__items-list'>
                        {                           
                            <li className='c-details__item'>{details.father}</li>
                        }
                    </ul>
                </div>
                <div className="col-2 c-details__col">
                    <h3 className='c-details__col-title'>{t('siblings')}</h3>
                    <ul className='c-details__items-list'>
                        {
                            details.siblings && details.siblings.map(el => {
                                return <li className='c-details__item' key={el}>{el}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-2 c-details__col">
                    <h3 className='c-details__col-title'>{t('titles')}</h3>
                    <ul className='c-details__items-list'>
                        {
                            details.titles && details.titles.map(el => {
                                return <li className='c-details__item' key={el}>{el}</li>
                            })
                        }
                    </ul>
                </div>
            </div>


            {/* <div className=''>

                <section className='c-details__info-wrapper'>
                    <div className='c-details__info-col'>

                    </div>
                    <div className='c-details__info-col'>

                    </div>
                </section>
            </div> */}

        </main>
    );
}

export default CharacterDetail;