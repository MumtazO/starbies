import React from "react";
import {BsFillPersonFill} from "react-icons/bs"
import {AiFillHome} from "react-icons/ai"


function Header() {
  return (
    <div className="straighlineheader">
      <span className="icons">
        <a href="/">
          <AiFillHome />
        </a>
        <a href="/library">
          <BsFillPersonFill />
        </a>
      </span>
      <h1>MUSIC</h1>
      <input placeholder="search for your faves..." />
    </div>
  );
}

export default Header;
