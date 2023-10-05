import { useState, useEffect } from 'react';

function CharactersPage() {

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

  //Make a copy of our state
  const copyArr = Array.from(people);
  //Order alphabetically by name
  const alphabeticalPeople = copyArr.sort((a, b) => {
    if (a.name > b.name) return 1
    else if (a.name < b.name) return -1;
    else return 0;
  });

  return (
    <div>
      <h1>Star Wars People</h1>
      <ul>
        {alphabeticalPeople.map((person, index) => {
          let color = person.eye_color;
          let trueEyeColor = color;
          if (color.includes("-")){
            trueEyeColor = color.slice(color.indexOf("-")+1)
          }
          return <li
           className='star-wars-card'
           style={{backgroundColor: trueEyeColor}}
           key={index}
           >
            <h2>{person.name}</h2>
            <p>{person.gender}</p>
            <p>{person.height}</p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default CharactersPage