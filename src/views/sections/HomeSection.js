import { Box, Image } from '@chakra-ui/react';

function HomeSection({img}) {
    return (
        <Box
            w='100%'
            h='55vh'
        >
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