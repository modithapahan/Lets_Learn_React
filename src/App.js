import { React, useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0)

  const increseAge = () => {
    setAge(age+1)
  } 

  const decreseAge = () => {
    setAge(age-1)
  }

  return (
    <div className="container mt-3">
      {age}&nbsp;
      <button className="btn btn-primary" onClick={increseAge}>Increse</button>
      &nbsp;
      <button className="btn btn-primary" onClick={decreseAge}>Decrese</button>
    </div>
  );
}

export default App;
