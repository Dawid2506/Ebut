import React from 'react';
import './SpecificInformation.scss';

const SpecificInformation = ({toggleBlur}) => {

    const setCheck = () => {
        toggleBlur();
    }

    return (
        <div className='specificInfoContainer'>
            <h2 className='specBrand'>adidas</h2>
            <p className='specDescription'>Buty Runfalcon 2.0 I GX3540 Dark Blue/Cloud White/Blue Rush</p>
            <h1 className='specPrice'>139,99 zł</h1>
            <div className='sizeTable' onClick={setCheck}>
                <p>Tabela rozmiarów</p>
            </div>
        </div>
    );
};

export default SpecificInformation;
