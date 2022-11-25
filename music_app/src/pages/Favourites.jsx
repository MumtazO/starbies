import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Divider } from "@chakra-ui/react";
import "./Favourites.css";
import { HiPhotograph } from "react-icons/hi";
import {  useParams } from 'react-router-dom';
import {useEffect} from "react"
import axios from "axios"
function Favourites () {
    let { id } = useParams();
    let token = window.localStorage.getItem("token")
    console.log(id)
    useEffect(()=>{
        axios.get(`https://api.spotify.com/v1/albums/${id}`, {
             headers:{
                 Authorization:'Bearer ' + token,
                 
             }
             
         }).then(response => {
             console.log(token)
             console.log("trying to get album data", response.data)
            

         })
     },[token])
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
  