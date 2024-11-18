import { Box, Image } from '@chakra-ui/react';
import Header from '../layout/Header';
function HomeSection({img}) {
    return (
        <Box
            w='100%'
            h='100vh'
        >   
            <Header />
            <Image 
                src={img}
                fit='cover'
                h='full'
                w='full'
                borderRadius='4px'
            />
        </Box>
    );
}

export default HomeSection;