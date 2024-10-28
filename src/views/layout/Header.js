import { HStack, Box, VStack } from "@chakra-ui/react";
import RightContent from "../../components/navbar/RightContent";
import LeftContent from "../../components/navbar/LeftContent";
import img from "../../assets/default/plane.png";
import HomeSection from "../sections/HomeSection";

function Header() {

    const navItems = [
        {
            name: 'Home',
            href: '#',
        },
        {
            name: 'How it works',
            href: '#howitworks',
        },
        {
            name: 'About',
            href: '#',
        },
        {
            name: 'Contact',
            href: '#',
        },
    ];

    return (
            
            <Box
                bgSize='cover'
                bgPos='center'
                bgRepeat='no-repeat'
                h={{base: '65vh'}}
                display='flex'
                flexDirection='row'
                alignItems='end'
                alignContent='center'
                justifyContent='center'
                borderRadius='0px 0px 64px 64px'
            >
                <HStack 
                h='10vh'
                minW='100vw' 
                p={2} 
                bg='blackAlpha.500'
                alignSelf='start' 
                justifyContent='space-between' 
                position='absolute'
                >
                
                    <LeftContent />
                    
                    <RightContent navItems={navItems}/>

                    <HStack></HStack>
                </HStack>

                <HomeSection img={img}/>

            </Box>
    );
};

export default Header;