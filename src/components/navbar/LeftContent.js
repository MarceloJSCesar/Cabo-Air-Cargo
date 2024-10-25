import { Flex, Image } from "@chakra-ui/react";
import logo from '../../assets/default/logo.png';

function LeftContent() {
    return (
       <Flex 
        alignItems='center' 
        justifyContent='space-between' 
        gap={4}
       >
            <Image 
                src={logo} 
                width='100px' 
                height='100px'
                fit='fill'
            />
       </Flex>
    );
}

export default LeftContent;