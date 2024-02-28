import './ProductList.scss';
import Item from './Item';
import React, { useState, useEffect } from 'react';
import axios from "axios";

const ProductList = () => {
    const [itemData, setItemData] = useState([]);

    const fetchData = async () => {
        try {
          console.log("fetching data from database");
          const response = await axios.get('http://localhost:5000/readFromItem');
          setItemData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };

    useEffect(() => {
        fetchData();
    }, []);

    const numItems = itemData.length;

    const itemsArray = Array.from({ length: numItems }, (_, index) => index);

    const writeItems = () => {
        return itemsArray.map((itemIndex) => (
            <div>
                <Item key={itemIndex}
                    brand={itemData[itemIndex].brand}
                    model={itemData[itemIndex].model}
                    price={itemData[itemIndex].price}
                    availableSizes={itemData[itemIndex].availableSizes}
                />
                {writeLine(itemIndex)}
            </div>

        ));
    }

    const writeLine = (itemIndex) => {
        if (itemIndex > 3) {
            return (
                <div className='itemsRow'></div>
            );
        }
    }

    return (
        <div className='items'>
            {writeItems()}
        </div>
    );
}

export default ProductList;
