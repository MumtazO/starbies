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
      <input type="text" width="50px"/>
      <h1 className="app-name">Canticum</h1>
    </div>
    </main>
  );
}

export default Header;

//  
