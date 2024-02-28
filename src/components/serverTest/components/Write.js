//import React, { useState } from 'react'
import axios from "axios";

function Write() {

  //let [inputValue, setInputValue] = useState("");

  const data = [
    {
        brand: 'Nike',
        model: 'Air Max 90',
        price: 299.99,
        availableSizes: [35, 38, 40, 41, 42, 45],
    },
    {
        brand: 'Adidas',
        model: 'Superstar',
        price: 199.99,
        availableSizes: [41, 42, 47],
    },
    {
        brand: 'Puma',
        model: 'RS-X',
        price: 249.99,
        availableSizes: [46, 47],
    },
    {
        brand: 'Reebok',
        model: 'Classic Leather',
        price: 199.99,
        availableSizes: [37, 38, 39, 40, 42, 44, 46, 47],
    },
    {
        brand: 'New Balance',
        model: '574',
        price: 249.99,
        availableSizes: [39, 40, 41, 42, 43, 47],
    },
    {
        brand: 'Vans',
        model: 'Old Skool',
        price: 199.99,
        availableSizes: [40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
        brand: 'Converse',
        model: 'Chuck Taylor All Star',
        price: 199.99,
        availableSizes: [42, 43, 44, 45, 46, 47],
    },
    {
        brand: 'Fila',
        model: 'Disruptor',
        price: 299.99,
        availableSizes: [41, 42, 45, 46, 47],
    },
    {
        brand: 'Lacoste',
        model: 'Carnaby Evo',
        price: 249.99,
        availableSizes: [39, 40, 42, 43, 45],
    },
    {
        brand: 'Timberland',
        model: '6 Inch Premium Boot',
        price: 399.99,
        availableSizes: [39, 41, 45, 47],
    },
]

  const saveData = async () => {
    try {
      for (let i = 0; i < data.length; i++) {
        const itemData = data[i];
        await axios.post("http://localhost:5000/additem", itemData);
      }
      console.log("Dane zostały pomyślnie zapisane w bazie danych");
    } catch (error) {
      console.error("Błąd:", error.message);
    }
  }

  return (
    <div>
      {/* <input type="string" placeholder='enter something'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      /> */}
      <button onClick={saveData}> save data to mongodb</button>
    </div>
  )
}

export default Write