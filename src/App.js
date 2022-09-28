import React from "react";
import "./App.css";
import User from "./User";

function App() {
  const users = [
    { name: "moditha1", age: 22 },
    { name: "moditha2", age: 23 },
    { name: "moditha3", age: 23 },
  ];

  return (
    <div className="container mt-3">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />
      })}
    </div>
  );
}

export default App;
