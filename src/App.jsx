import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState([]);

  //The effect happens AFTER the function finishes (displays the JSX)
  useEffect(() => {
    //Fetch returns 
    fetch(`https://swapi.dev/api/people`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      setPeople(result.results);
    })
    .catch((err) => console.error(err));
  }, []);
  //Dependency Array
  //The effect will only run if an item inside of the array has changed since the last time the effect happened

  return (
    <div>
      <h1>Star Wars People</h1>
      <ul>
        {people.map((person, index) => {
          return <li key={index}>{person.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App