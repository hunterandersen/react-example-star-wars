import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import CharactersPage from "./pages/charactersPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import './App.css';

//1. Install react-router-dom
//2. Wrap the application in BrowserRouter
//3. Set up the Routes and Route
//4. Each Route wants a path and an element
//5. Set up user navigation using NavLink elements
  //NavLinks want a to attribute and text to show

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Routes>
    </BrowserRouter>
  )
}