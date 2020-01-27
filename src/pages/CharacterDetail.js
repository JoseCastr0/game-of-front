import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './characters.scss';

function CharacterDetail() {
    let { slug } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://api.got.show/api/show/characters/bySlug/${slug}`)
            .then(res => res.json())
            .then(setDetails)
    }, [slug]);

    console.log("slug", slug);

    return (
        <main className='c-gallery-wrapper container-fluid'>
            <div className='c-img-gallery'>
                {details.name}
            </div>

        </main>
    );
}

export default CharacterDetail;