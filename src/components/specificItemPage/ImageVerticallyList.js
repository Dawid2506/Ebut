import './ImageVerticallyList.scss';
import shoesOne from '../../img/shoes/shoesOne.png';
import shoesTwo from '../../img/shoes/shoesTwo.png';

function ImageVerticallyList() {
  return (
    <div className='imageListContainer'>
      <div className='list'>
        <img className='particularImageFromList' src={shoesTwo} alt="shoesTwo" width='80px' />
        <img className='particularImageFromList' src={shoesOne} alt="shoesTwo" width='80px' />
        <img className='particularImageFromList' src={shoesTwo} alt="shoesTwo" width='80px' />
        <img className='particularImageFromList' src={shoesOne} alt="shoesTwo" width='80px' />
        <img className='particularImageFromList' src={shoesTwo} alt="shoesTwo" width='80px' />
        <img className='particularImageFromList' src={shoesOne} alt="shoesTwo" width='80px' />
        <img className='particularImageFromList' src={shoesTwo} alt="shoesTwo" width='80px' />
        <img className='particularImageFromList' src={shoesOne} alt="shoesTwo" width='80px' />
        <img className='particularImageFromList' src={shoesTwo} alt="shoesTwo" width='80px' />
      </div>
    </div>
  );
}

export default ImageVerticallyList;
