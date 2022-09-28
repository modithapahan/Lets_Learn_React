import React from 'react';
import './App.css';

function App() {

  const age = 42;
  const isGreen = true;
  let mango = 420;
  let apple = 150;
  const sum = mango + apple;

  return (
    <div className="App">
      <div>
        {age >= 18 ? <h4>Over Age</h4> : <h4>Under Age</h4>}
        <h1 style={{ color: isGreen ? "green" : "red" }}>This is a Boolean.</h1>
      </div>

      <div>
        {sum >= 500 ? <h4>Price is too high</h4> : <h4>Price is normal</h4>}
      </div>
    </div>
  );
}

export default App;
