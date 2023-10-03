import { useState } from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState([{"name":"Yoda"}, {"name":"Leia"}]);

  //How do I render a list of things in React?
  return (
    <div>
      <h1>Star Wars People</h1>
      <ul>
        {people.map((person) => {
          return <li>{person.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App