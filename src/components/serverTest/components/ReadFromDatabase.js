import React, { useState } from 'react';
import axios from 'axios';

function ReadFromDatabase() {
    const [data, setData] = useState([]);
  
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    const fetchData = async () => {
      try {
        console.log("fetching data from database");
        const response = await axios.get('http://localhost:5000/readfromdatabase');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    return (
      <div>
        <h2 onClick={fetchData}>Data from Database:</h2>
        <ul>
          {data.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ReadFromDatabase;
  