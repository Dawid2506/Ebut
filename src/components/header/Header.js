import './Header.scss';
import SearchBar from './SearchBar';
import Basket from './Basket';
import { TfiBackRight } from "react-icons/tfi";
import { LuBus } from "react-icons/lu";

function Header() {

  return (
    <div class="header">
      <h2 class="logo">ebut.pl</h2>
      <div class="searchBar"><SearchBar /></div>
      <div class='informationContainer'>
        <div class='information'>
          <p class='left'><TfiBackRight /></p>
          <div class='right'>
            <h3>100 dni na darmowy zwrot</h3>
            <h4>zobacz szczegóły</h4>
          </div>
          <div class='window'><div class='point'></div>Zwrotu możesz dokonać w terminie 100 dni od momentu odebrania zamówienia.</div>
        </div>

        <div class='information'>
          <p class='left'><LuBus /></p>
          <div class='right'>
            <h3>Dostawa od 0 zł</h3>
            <h4>zobacz szczegóły</h4>
          </div>
          <div class='window'><div class='point'></div>Dostawa od 0 zł:
            Odbiór w sklepie: 0 zł
            Kurier: 0 zł dla zakupów od 149 zł (płatność przelewem)
            Paczkomat: 0 zł dla zakupów od 149 zł (płatność przelewem)
          </div>
        </div>

      </div>
      <Basket />
    </div>
  );
}

export default Header;