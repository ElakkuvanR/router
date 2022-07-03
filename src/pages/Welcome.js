import React from "react";
import { Link, Outlet } from "react-router-dom";

const Welcome = (props) => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <Outlet></Outlet>
    </section>
  );
};

export default Welcome;
