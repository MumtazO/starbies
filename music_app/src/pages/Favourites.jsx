import "./favourites.css"
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
function Favourites () {
    return (  
        <div>
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