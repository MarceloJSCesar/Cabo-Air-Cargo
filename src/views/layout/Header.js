import { HStack, Box } from "@chakra-ui/react";
import RightContent from "../../components/navbar/RightContent";
import LeftContent from "../../components/navbar/LeftContent";
import backgroundImg from "../../assets/default/plane.png";

function Header() {

    const navItems = [
        {
            name: 'Home',
            href: '#',
        },
        {
            name: 'How it works',
            href: '#',
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
                bgImage={`url(${backgroundImg})`}
                bgSize='cover'
                bgPos='center'
                bgRepeat='no-repeat'
                h={{base: '100vh', md: '80vh'}}
                minW='100vw'
            >
                <HStack 
                w='full' p={2} 
                display='flex' 
                alignItems='center' 
                justifyContent='space-between' 
            >
                
                    <LeftContent />
                    
                    <RightContent navItems={navItems}/>

                    <HStack></HStack>
                </HStack>
            </Box>
    );
};

export default Header;