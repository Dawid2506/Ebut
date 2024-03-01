import Header from '../header/Header.js';
import ImageVerticallyList from './ImageVerticallyList.js';
import MainImage from './MainImage.js';
import SpecificInformation from './SpecificInformation.js';
import './SpecificItemPage.scss';

function SpecificItemPage() {
  return (
    <div>
      <Header />
      <div className='specificItemPageContatiner'>
        <ImageVerticallyList />
        <MainImage />
        <SpecificInformation />
      </div>
    </div>
  );
}

export default SpecificItemPage;
