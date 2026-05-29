
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About"
import { Route, Router } from "react-router-dom";

function App(){
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

    </Router>
  );
}

export default App
