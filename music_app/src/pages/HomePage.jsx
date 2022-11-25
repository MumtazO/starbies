import "./HomePage.css";
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useEffect, useState} from 'react';
import axios from "axios"

function HomePage () {
    const [album, setAlbum] = useState([])
    const token = window.localStorage.getItem("token")
    const ids = '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc'
    // @todo: how to get rid of hardcoded id
    useEffect(()=>{
        console.log("used in second useeffect", token)
        axios.get(`https://api.spotify.com/v1/albums?ids=${ids}`, {
             headers:{
                 Authorization:'Bearer ' + token,
                 
             }
             
         }).then(response => {
             console.log(token)
             console.log("trying to get album data", response.data)
             setAlbum(response.data.albums)

         })
     },[token])
     console.log("album", album)
    return ( 
        <div className="album">
            <SimpleGrid columns={3} gap={10} marginEnd={25} marginStart={20}
            >
            {album.map(item => {
             return (
                <Link to={`/favourites/${item.id}`}>
                    <Box bg='aquamarine' height='250px' width='350px' >
                    {item.name}
                    </Box>
                </Link>
            )})}

            </SimpleGrid>
        </div>
     );
}


export default HomePage;

