import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './characters.scss';

function CharacterDetail() {
    let { slug } = useParams();
    const { t } = useTranslation();
    const [details, setDetails] = useState([]);
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch(`https://api.got.show/api/show/characters/bySlug/${slug}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                setDetails(res);
                fetch(`https://api.got.show/api/show/houses/${res.house}`)
                .then(res => res.json())
                .then(setHouses)
            })
    }, []);


    console.log("details", details);
    //console.log("houses", houses);
    console.log("houses", houses[0]);

    return (
        <main className='c-details'>
            <div className=''>
                <img 
                    className=''
                    src={details.image} 
                    alt={details.name}
                />
                <h2>{details.name}</h2>
                <h2>House img url: {houses.logoURL}</h2>
                <section className='c-details__info-wrapper'>
                    <div className='c-details__info-col'>
                        <h3>{t('houses')}</h3>
                        <img
                            className='' 
                            src={houses.logoURL}
                            alt='' 
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