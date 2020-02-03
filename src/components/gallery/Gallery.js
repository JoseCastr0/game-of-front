import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.scss';
import SimpleBarReact from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

function Gallery(props) {
    return (
        <main className='container-fluid'>
            <div className='c-img-gallery'>
                <SimpleBarReact className='o-simple-bar d-flex'>
                    {
                        props.characters ?
                            props.characters.map(character => {
                                if (character.image) {
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
                                }
                            })
                        :
                        props.houses.map(house => {
                            if (house.logoURL) {                            
                                return (
                                    <figure key={house._id} className='c-img-gallery__item'>
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
                            }
                        })
                    }                    
                </SimpleBarReact>
            </div>
        </main>
    )
}

export default Gallery;