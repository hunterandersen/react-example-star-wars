import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function SingleCharacterPage() {
  const { swNumber } = useParams();
  const [speciesData, setSpeciesData] = useState({});
  const [homeworldData, setHomeworldData] = useState({});
  const { state } = useLocation();

  useEffect(() => {
    const { character } = state;
    //Fetch the character's species info, if there is any
    if (character.species.length > 0) {
      fetch(character.species[0])
        .then((response) => response.json())
        .then((result) => {
          setSpeciesData(result);
        })
        .catch((err) => console.error(err));
    } else {
      setSpeciesData(null);
    }
    //Fetch the character's homeworld info, if there is any
    if (character.homeworld) {
      fetch(character.homeworld)
        .then((response) => response.json())
        .then((result) => {
          setHomeworldData(result);
        })
        .catch((err) => console.error(err));
    } else {
      setHomeworldData(null);
    }
  }, [state]);

  return (
    <>
      <h2>Character: {state.character.name}</h2>
      <p>Character Number is {swNumber}</p>
      <div className="tables-grid">
        {speciesData && (
          <table>
            <thead>
              <tr>
                <th colSpan="2">Species Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Classification</th>
                <td>{speciesData.classification}</td>
              </tr>
              <tr>
                <th>Designation</th>
                <td>{speciesData.designation}</td>
              </tr>
            </tbody>
          </table>
        )}
        {homeworldData && (
          <table>
            <thead>
              <tr>
                <th colSpan="2">Homeworld Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{homeworldData.name || `N/A`}</td>
              </tr>
              <tr>
                <th>Population</th>
                <td>{homeworldData.population || `N/A`}</td>
              </tr>
              <tr>
                <th>Climate</th>
                <td>{homeworldData.climate || `N/A`}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
