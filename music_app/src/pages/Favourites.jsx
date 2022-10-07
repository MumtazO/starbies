import { Divider } from "@chakra-ui/react";
import "./Favourites.css";
import { HiPhotograph } from "react-icons/hi";

function Favourites() {
  return (
    <div className="favourites-page">
    <div className="album-header">
      <HiPhotograph size={80} />
      <div className="album-details">
      <h1>album name</h1>
      <p>artist name, year</p>
      </div>
      </div>
      <Divider borderColor="#9973F0" />
      <ol className="track-list">
          <li>song</li>
          <li>song</li>
          <li>song</li>
          <li>song</li>
          <li>song</li>
          <li>song</li>
      </ol>
    </div>
  );
}

export default Favourites;
