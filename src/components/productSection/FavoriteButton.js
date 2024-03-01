import './FavoriteButton.scss';
import { CiHeart } from "react-icons/ci";
import React, { useState } from 'react';

const FavoriteButton = ({ onClick }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const SetFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={`favoriteButton ${isFavorite ? 'favorite' : ''}`} onClick={(event) => { onClick(event); SetFavorite(); }}>
            <CiHeart className='heartIcon'/>
        </div>
    );
};

export default FavoriteButton;
