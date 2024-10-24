import { Flex } from "@chakra-ui/react";
import logo from '../../assets/default/logo.png';

function LeftContent() {
    return (
       <Flex alignItems='center' justifyContent='space-between' gap={4}>
            <img src={logo} width='100px' height='100px'/>
       </Flex>
    );
}

export default LeftContent;