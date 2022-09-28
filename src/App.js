import { React, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="container mt-3">
      <input type='text' onChange={handleInputChange} />&nbsp;
      {inputValue}
    </div>
  );
}

export default App;
