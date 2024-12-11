import './SearchBar.scss';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    function multiply(a) {
        return function (b) {
            return function (c) {
                return a * b * c;
            };
        };
    }

    const test = () => {
        console.log(multiply(2)(3)(4)); //24

        const multiplyByTwo = multiply(2);
        console.log(multiplyByTwo(3)(4)); //24

        console.log(multiply(2)(3)); //error!
    }

    return (
        <div class="searchBar">
            <input type="search" placeholder="Search" class='textField'></input>
            <div class="button" onClick={test}><CiSearch /></div>
        </div>
    );
}




export default SearchBar;