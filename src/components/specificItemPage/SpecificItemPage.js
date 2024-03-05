import Header from '../header/Header.js';
import ImageVerticallyList from './ImageVerticallyList.js';
import MainImage from './MainImage.js';
import SpecificInformation from './SpecificInformation.js';
import SizeTable from './SizeTable.js';
import './SpecificItemPage.scss';
import { useState } from 'react';

function SpecificItemPage() {
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div className={`specificItemPage ${isBlurred ? 'blurred' : ''}`}>
      <Header />
      <div className='specificItemPageCC'>
        <div className='specificItemPageContatiner'>
          <ImageVerticallyList />
          <MainImage />
          <SpecificInformation toggleBlur={toggleBlur} />
          <SizeTable />
        </div>
      </div>
    </div>
  );
}

export default SpecificItemPage;
