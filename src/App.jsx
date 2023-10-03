import MyButton from './components/MyButton';
import './App.css';

function App() {

  const list = ["apples", "pears", "bananas", "mangos"];

  return (
    <div>
      <h1 className="myCoolClass">Welcome to my app</h1>
      <MyButton foods={list}/>
      {list.map((element, index, array) => {
        return <li key={element + index}>{element}</li>
      })}

    </div>
  )
}

export default App


//DOM Manipulation
// list.forEach((item) => {
//   //1. Create the elements
//   const newLi = document.createElement("li");
//   //2. Modify the elements
//   newLi.textContent = item;
//   //3. Append the elements
//   document.body.append(newLi);
// });
