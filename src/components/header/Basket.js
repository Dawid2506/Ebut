import './Basket.scss';
import { BsBasket3 } from "react-icons/bs";

const Basket = () => {
    return (
        <div class="basketButton">
            <BsBasket3 /> <p>Koszyk (0)</p>
            <div class = 'basketWindow'><p>Nie masz produktów w koszyku</p></div>
        </div>
    );
}




export default Basket;