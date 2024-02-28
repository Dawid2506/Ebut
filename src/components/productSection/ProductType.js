import './ProductType.scss';
import { MdExpandLess } from "react-icons/md";

const ProductType = () => {
    const data = [
        {
            id: 1,
            name: 'Buty',
            amount: 10,
        },
        {
            id: 2,
            name: 'Odzież',
            amount: 2,
        },
        {
            id: 3,
            name: 'Akcesoria',
            amount: 5,
        }
    ];

    const writeList = (data) => {
        return data.map((item) => {
            return (
                <p key={item.id}>{item.name}  <div className='typeAmount'>{item.amount}</div></p>
            )
        })
    }


    return (
        <div className='productType'>
            <div className="typeGoBack"><p><div className='lessThan'><MdExpandLess /></div>Dziecięce</p></div>
            <div className='line'></div>
            <div className="typeList">
                {writeList(data)}
            </div>
        </div>
        
    );
}

export default ProductType;
