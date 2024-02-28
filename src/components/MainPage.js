import Header from './header/Header.js';
import ProductList from './productSection/ProductList.js';
import ProductType from './productSection/ProductType.js';
// import Test from './serverTest/test.js';
import '../App.scss';

function MainPage() {
  return (
    <div>
      <Header />
      <div className='mainContainer'>
        <div className='typeContainer'>
          <ProductType />
        </div>
        <div className='productContainer'>
          <ProductList />
        </div>
      </div>

      {/* <Test /> */}
    </div>
  );
}

export default MainPage;
