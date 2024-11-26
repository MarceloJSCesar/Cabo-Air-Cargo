import { Flex, Image } from "@chakra-ui/react";
import logo from '../../assets/default/cac-logo-no-bg.png';

function LeftContent() {
    return (
       <Flex 
        alignItems='center' 
        justifyContent='space-between' 
        gap={4}
       >
            <Image 
                src={logo} 
                width='80px' 
                height='60px'
                fit='fill'
            />
       </Flex>
    );
}

export default LeftContent;