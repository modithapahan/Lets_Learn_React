import { React, useState } from "react";
import "./App.css";

function App() {

  const [count, setValue] = useState(0);

  const IncreaseValue = () => {
      setValue(count + 1)
  }

  const DecreaseValue = () => { 
      setValue(count - 1)
  }

  const SetZero = () => {
    setValue(0)
  }

  return (
    <div className="container mt-3">
      <button className="btn btn-primary" onClick={IncreaseValue}>Increase</button>
      &nbsp;
      <button className="btn btn-primary" onClick={DecreaseValue}>Decrease</button>
      &nbsp;
      <button className="btn btn-primary" onClick={SetZero}>Set to zero</button>
    
      &nbsp;
      {count}
    </div>
  );
}

export default App;
