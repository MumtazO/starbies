import "./homepage.css";
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'





function HomePage () {
    return ( 
        <div className="album">
            <SimpleGrid columns={3} gap={10} marginEnd={25} marginStart={20} >
            <Box bg='tomato' height='200px'>
                <Button>Songs</Button>
            </Box>
            <Box bg='tomato' height='200px'>
            <Button>Songs</Button>
            </Box>
            <Box bg='tomato' height='200px'>
            <Button>Songs</Button>
            </Box>
            </SimpleGrid>
        </div>
     );
}

export default HomePage;

