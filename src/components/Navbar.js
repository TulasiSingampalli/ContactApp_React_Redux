import React from "react";
import { Link } from "react-router-dom";
import { SearchContact } from "./SearchContact";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container">
        <Link to="/" className="navbar-brand">
          React Redux Contact App
        </Link>
        <div className="ml-auto">
          <SearchContact />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
