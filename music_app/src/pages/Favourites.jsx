
import "./favourites.css"
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Divider } from "@chakra-ui/react";
import "./favourites.css";
import { HiPhotograph } from "react-icons/hi";
function Favourites () {
    return (  
        <div>
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
            <h1 className="favourites-page">favourites page</h1>
            <Box 
            className="music-player"
            bg={[
                '#6446aa;'
             ]}
             h="450px"
             w="450px" 
             ml="500px"
             pl="80px"
             pt="30px"
             
             color='black'
            
            >
            <br/>Now Playing
            <Image
            boxSize='300px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            />
            </Box>
        </div>
    );
}
 export default Favourites;
  