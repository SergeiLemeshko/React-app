import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {

  return (
    <nav className="navigation">
      <div className="links">
        <Link to="/">Counter</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  )
}