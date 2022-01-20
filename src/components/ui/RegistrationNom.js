import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function RegistrationNom(params) {
  const [text, setText] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(event.target.name.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address:
          <input type="text" name="name" defaultValue />
        </label>
        <label>
          Password
          <input type="number" name="age" />
        </label>
        <input type="submit" />
      </form>
      {text}
    </>
  );
}

ReactDOM.render(<RegistrationNom />, document.getElementById("root"));
