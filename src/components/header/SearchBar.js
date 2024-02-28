import './SearchBar.scss';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    return (
        <div class="searchBar">
            <input type="search" placeholder="Search" class = 'textField'></input>
            <div class = "button"><CiSearch /></div>
        </div>
    );
}




export default SearchBar;