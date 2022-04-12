import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const birds = useSelector((state) => state.birds);

  return (
    <div className="wrapper">
      <h1>Bird List</h1>
      <ul>
        {birds.map((bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>Views: {bird.views}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
