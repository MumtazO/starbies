import React from "react";
import {BsFillPersonFill} from "react-icons/bs"
import {AiFillHome} from "react-icons/ai"
import { Link } from "react-router-dom";
import "./header.css"


function Header() {
  return (
      <main className="Header">
    <div className="straighlineheader">
      <span className="icons">
        <Link to="/">
          <AiFillHome />
        </Link>
        <Link to="/favourites">
          <BsFillPersonFill />
        </Link>
      </span>
      <h1>MUSIC</h1>
      <input placeholder="search for your faves..." />
    </div>
    </main>
  );
}

export default Header;
