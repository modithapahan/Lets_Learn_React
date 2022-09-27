import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Moditha0" age={22} email="modithapahan0@gmail.com" />
      <User name="Moditha1" age={22} email="modithapahan1@gmail.com" />
      <User name="Moditha2" age={22} email="modithapahan2@gmail.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div class="container mt-4 pt-3">
      <h4>{props.name}</h4>
      <h4>{props.age}</h4>
      <h4>{props.email}</h4>
    </div>
  );
}

export default App;
