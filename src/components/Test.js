import React, { useState } from "react";
import axios from "axios";

export default function Test(params) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
          <input type="password" name="password" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
