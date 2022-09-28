import React from "react";
import "./App.css";

function App() {
  const planets = [
    { name: "mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ];

  return (
    <div className="container mt-3">
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <h4>{planet.name}</h4>
      })}
    </div>
  );
}

export default App;
