import "./MainImage.scss";
import shoesTwo from '../../img/shoes/shoesTwo.png';

const MainImage = () => {
    return (
        <div className="mainImageContainer">
            <img className='bigImage' src={shoesTwo} alt="shoesTwo" width='400px' height='400px'/>
        </div>
    );
};

export default MainImage;
