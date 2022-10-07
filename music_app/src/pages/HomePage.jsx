import "./HomePage.css";
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Link } from "react-router-dom";




function HomePage () {
    return ( 
        <div className="album">
            <SimpleGrid columns={3} gap={10} marginEnd={25} marginStart={20}
            >

            <Link to="/favourites">
            <Box bg='aquamarine' height='250px' width='350px' >
            </Box>
            </Link>

            <Link to="/favourites">
            <Box bg='aquamarine' height='250px' width='350px' >
            </Box>
            </Link>

            <Link to="/favourites">
            <Box bg='aquamarine' height='250px' width='350px' >
            </Box>
            </Link>

            </SimpleGrid>
        </div>
     );
}


export default HomePage;

