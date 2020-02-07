import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.scss';
import SimpleBarReact from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';
import SearchBox from '../SearchBox/SearchBox';

function Gallery(props) {
    return (
        <main className='container-fluid'>
            <SearchBox searchChange={props.searchChange} />
            <div className='c-img-gallery'>
                <SimpleBarReact className='o-simple-bar'>
                    {
                        props.characters ?
                            props.characters.map(character => {
                                if (character.image) {
                                    return (
                                        <figure key={character.id} className='c-img-gallery__item'>
                                            <Link to={`/characters/${character.slug}`}>
                                                <img
                                                    name className='c-img-gallery__img'
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
                                return null;
                            })
                            :
                            props.houses.map(house => {
                                if (house.logoURL) {
                                    return (
                                        <figure key={house._id} className='c-img-gallery__item'>
                                            <Link to={`/houses/${house.name}`}>
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
                                return null;
                            })
                    }
                </SimpleBarReact>
            </div>
        </main>
    )
}

export default Gallery;