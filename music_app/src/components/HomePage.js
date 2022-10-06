import "./homepage.css";
import { Grid, GridItem } from '@chakra-ui/react';




function HomePage () {
    return ( 
        <div className="album">
            <Grid templateColumns='repeat(3, 1fr)' 
            gap={10} marginEnd={25} marginStart={20}>
            <GridItem w='300px' h='200' bg='blue.500'/>
            <GridItem w='300px' h='200' bg='blue.500' />
            <GridItem w='300px' h='200' bg='blue.500' />
            </Grid>
        </div>
     );
}

export default HomePage;