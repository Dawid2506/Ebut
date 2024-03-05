import "./MainImage.scss";
import shoesTwo from '../../img/shoes/shoesTwo.png';
import { useState } from 'react';

const MainImage = () => {
    const [zoomCoordinates, setZoomCoordinates] = useState({ x: 150, y: 150 });

    const HandleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomCoordinates({ x, y });
    }

    return (
        <div className="mainImageContainer" onMouseMove={HandleMouseMove}>
            <img className='bigImage' src={shoesTwo} alt="shoesTwo" style={{
                width: '400px',
                height: '400px',
                transformOrigin: `${zoomCoordinates.x}% ${zoomCoordinates.y}%`
            }} />
        </div>
    );
};

export default MainImage;
