import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './details.scss';
import LogoHouse from '../logoHouse/LogoHouse';
import SimpleBarReact from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';
import Moment from 'react-moment';

function CharacterDetail() {
    let { slug, name } = useParams();
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const isCharactersUrl = window.location.href.includes('characters');

    useEffect(() => {
        if (isCharactersUrl) {
            fetch(`https://api.got.show/api/show/characters/bySlug/${slug}`)
                .then(res => res.json())
                .then(setDetails)
        } else {
            fetch(`https://api.got.show/api/show/houses/${name}`)
                .then(res => res.json())
                .then(setDetails)
        }
    }, []);

    return (
        <main className='c-details'>
            <div className='container-fluid'>
                <div className='c-details__title-row'>
                    <img
                        className='c-details__main-img '
                        src={isCharactersUrl ? details.image : details[0] && details[0].logoURL}
                        alt={isCharactersUrl ? details.name : details[0] && details[0].name}
                    />
                    <h2>{isCharactersUrl ? details.name : details[0] && details[0].name}</h2>
                </div>
                <div className='c-details__details-row'>
                    <div className="c-details__details-row">
                        <div className='row'>
                            <div className='col-2'>
                                <div className='c-details__col'>
                                    <h3 className='c-details__col-title'>{isCharactersUrl ? t('houses') : t('words')}</h3>
                                    {
                                        isCharactersUrl ?
                                            <LogoHouse
                                                characterName={details.house}
                                            />
                                            : <span className='c-details__item c-details__item--span'>{details[0] && details[0].words}</span>

                                    }

                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='c-details__col'>
                                    <h3 className='c-details__col-title'>{isCharactersUrl ? t('allegiances') : t('sear')}</h3>
                                    {
                                        isCharactersUrl ?
                                            <ul className='c-details__items-list'>
                                                <SimpleBarReact className='o-simple-bar'>
                                                    {
                                                        details.allegiances && details.allegiances.map(el => {
                                                            return <li className='c-details__item' key={el}>{el}</li>
                                                        })
                                                    }
                                                </SimpleBarReact>
                                            </ul>
                                            : <span className='c-details__item c-details__item--span'>{details[0] && details[0].seat[0]}</span>
                                    }
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='c-details__col'>
                                    <h3 className='c-details__col-title'>{isCharactersUrl ? t('appearances') : t('allegiances')}</h3>
                                    <ul className='c-details__items-list'>
                                        {
                                            isCharactersUrl ?
                                                <SimpleBarReact className='o-simple-bar'>
                                                    {
                                                        details.appearances && details.appearances.map(el => {
                                                            return <li className='c-details__item' key={el}>{el}</li>
                                                        })
                                                    }
                                                </SimpleBarReact>
                                                :
                                                <SimpleBarReact className='o-simple-bar'>
                                                    {
                                                        details[0] && details[0].allegiance.map(el => {
                                                            return <li className='c-details__item' key={el}>{el}</li>
                                                        })
                                                    }
                                                </SimpleBarReact>
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='c-details__col'>
                                    <h3 className='c-details__col-title'>{isCharactersUrl ?  t('father') :  t('region')}</h3>
                                    {
                                        isCharactersUrl ?
                                            <ul className='c-details__items-list'>
                                                {
                                                    <li className='c-details__item'>{details.father}</li>
                                                }
                                            </ul>
                                            : <span className='c-details__item c-details__item--span'>{details[0] && details[0].region[0]}</span>

                                    }
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='c-details__col'>
                                    <h3 className='c-details__col-title'>{isCharactersUrl ?  t('siblings') :  t('religions')}</h3>
                                    <ul className='c-details__items-list'>

                                        {
                                            isCharactersUrl ?
                                                <SimpleBarReact className='o-simple-bar'>
                                                    {
                                                        details.siblings && details.siblings.map(el => {
                                                            return <li className='c-details__item' key={el}>{el}</li>
                                                        })
                                                    }
                                                </SimpleBarReact>
                                                :
                                                <SimpleBarReact className='o-simple-bar'>
                                                    {
                                                        details[0] && details[0].religion.map(el => {
                                                            return <li className='c-details__item' key={el}>{el}</li>
                                                        })
                                                    }
                                                </SimpleBarReact>
                                        }


                                    </ul>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='c-details__col'>
                                    <h3 className='c-details__col-title'>{isCharactersUrl ? t('titles') : t('foundation')}</h3>
                                    {
                                        isCharactersUrl ?
                                            <ul className='c-details__items-list'>
                                                <SimpleBarReact className='o-simple-bar'>
                                                    {
                                                        details.titles && details.titles.map(el => {
                                                            return <li className='c-details__item' key={el}>{el}</li>
                                                        })
                                                    }
                                                </SimpleBarReact>
                                            </ul>
                                            : <span className='c-details__item c-details__item--span'>{details[0] && <Moment format="YYYY/MM/DD" >{details[0].createdAt}</Moment>}</span>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CharacterDetail;