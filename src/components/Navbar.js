import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="navbar l-flex ">
        <div className="logo l-flex__center">
          <img src="https://picsum.photos/500/500" alt="" />
        </div>

        <div className="menu l-flex__center">
          <Link className="link--style" to="/">
            Home
          </Link>
          <Link className="link--style" to="/projects">
            Projects
          </Link>
          <Link className="link--style" to="/about">
            About
          </Link>
          <Link className="link--style" to="/contact">
            Contact
          </Link>
        </div>

        <div className="button l-flex__center">
          <button className="c-button">Explore</button>
        </div>
      </div>
    </>
  );
}
