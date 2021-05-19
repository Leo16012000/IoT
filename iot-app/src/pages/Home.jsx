import React from "react";
import PropTypes from "prop-types";
import "../styles/Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <h1>Welcome to Cabinet Management System</h1>
      <Link to="/todo">Tap to continue</Link>
    </div>
  );
}

export default Home;
