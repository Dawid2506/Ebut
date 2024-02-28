import React, { useState } from 'react';
import './Item.scss';
import shoesOne from '../../img/shoes/shoesOne.png';
import shoesTwo from '../../img/shoes/shoesTwo.png';
import FavoriteButton from './FavoriteButton';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const renderImg = () => {
        if (isHovered) {
            return <img src={shoesTwo} alt="shoesTwo" width='200px' />
        }
        else {
            return <img src={shoesOne} alt="shoesOne" width='200px' />
        }
    }

    const writeSizes = () => {
        return props.availableSizes.map((size) => (
            <div className='itemSize'>{size}</div>
        ));
    }

    const navigateToSubPage = () => {
        navigate('/specificItemPage');
    };

    return (
        <div className='itemContainer' onClick={navigateToSubPage}>
            <div className={`item ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <FavoriteButton />
                {renderImg()}
                <div className='itemData'>
                    <p className='brand'>{props.brand}</p>
                    <p className='model'>{props.model}</p>
                    <p className='price'>{props.price} zł</p>
                </div>
                <div className='additionalContent'>
                    {writeSizes()}
                </div>
            </div>
        </div>
    );
}

export default Item;