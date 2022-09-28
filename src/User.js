import React from "react";

const User = (props) => {
  return (
    <div className="container">
      {props.name} {props.age}
    </div>
  );
};

export default User;
