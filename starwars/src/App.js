import React, {useState, useEffect} from 'react';
import axios from "axios";
import StarWarsCard from "./components/StarWarsCard";
import './App.css';

const App = () => {
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    axios
        .get("https://swapi.co/api/people/")
        .then(response => {
          console.log(response);
          setStarWarsData(response.data.results);
        })
        .catch(err => {
          console.log("data not retrieved", err);
        })
  }, [] );
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
          <div className="data_entry">
              {starWarsData.map(data => {
                  return (
                        <StarWarsCard 
                            key={data.id}
                            name={data.name}
                            height={data.height}
                            mass={data.mass}
                            hair={data.hair_color}
                            skin={data.skin_color}
                            />
                  )
              })}
          </div>

    </div>
  );
}

export default App;






