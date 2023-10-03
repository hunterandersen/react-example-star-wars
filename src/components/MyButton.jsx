import { useState } from "react";

function MyButton(props) {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("Hello World");

  function handleClick() {
    console.log("Handling the click event");
    setCount(count + 1);
    if (greeting == greeting.toUpperCase()) {
      setGreeting(greeting.toLowerCase());
    } else {
      setGreeting(greeting.toUpperCase());
    }
  }

  return (
    <div>
      <p>{`The current food is: ${props.foods[count % props.foods.length]}`}</p>
      <button onClick={handleClick}>I'm a button {count}</button>
      <p>{greeting}</p>
    </div>
  );
}

export default MyButton;

//How we used to do it in previous exercises
// element.addEventListener("click", handleClick);
