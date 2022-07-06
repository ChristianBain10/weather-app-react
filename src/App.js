import React, { useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b2d1c382e12198c653608aa3c4cee38d&units=imperial`;

  // const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=b2d1c382e12198c653608aa3c4cee38d`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  }

  return (
    <div className="App">
      <input 
        className="search-bar"
        type='text'
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter City'
      />
      <h2>{data.name}</h2>
      <p>{data?.main?.temp}</p>

    </div>
  );
}

export default App;
