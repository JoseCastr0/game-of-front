import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.scss';

function Gallery(props) {
    return (
        <main className='c-gallery-wrapper container-fluid'>
            <div className='c-img-gallery'>
                {
                    props.characters ?
                        props.characters.map(character => {
                            return (
                                <figure key={character.id} className='c-img-gallery__item'>
                                    <Link to={`/characters/${character.slug}`}>
                                        <img
                                            className='c-img-gallery__img'
                                            src={character.image}
                                            alt={character.name}
                                        />
                                        <figcaption className='c-img-gallery__img-caption'>
                                            {character.name}
                                        </figcaption>
                                    </Link>
                                </figure>
                            )
                        })
                    :
                    props.houses.map(house => {
                        return (
                            <figure key={house.id} className='c-img-gallery__item'>
                                <Link to={`/characters/${house.slug}`}>
                                    <img
                                        className='c-img-gallery__img'
                                        src={house.logoURL}
                                        alt={house.name}
                                    />
                                    <figcaption className='c-img-gallery__img-caption'>
                                        {house.name}
                                    </figcaption>
                                </Link>
                            </figure>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Gallery;