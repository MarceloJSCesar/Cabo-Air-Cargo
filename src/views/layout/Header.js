import { HStack, Box, VStack } from "@chakra-ui/react";
import RightContent from "../../components/navbar/RightContent";
import LeftContent from "../../components/navbar/LeftContent";

import img from "../../assets/default/plane.png";
import HomeSection from "../sections/HomeSection";
import MenuDrawer from "../../components/MenuDrawer/MenuDrawer";

import MenuDrawer from "../../components/MenuDrawer/MenuDrawer";

function Header() {

    const navItems = [
        {
            name: 'Home',
            href: '#home',
        },
        {
            name: 'How it works',
            href: '#how-it-works',
        },
        {
            name: 'About Us',
            href: '#about-us',
        },
        {
            name: 'Contact Us',
            href: '#contact-us',
        },
    ];

    return (
            
            <Box
                bgSize='cover'
                bgPos='center'
                bgRepeat='no-repeat'
                h={{base: '10vh'}}
                display='flex'
                flexDirection='row'
                alignItems='end'
                alignContent='center'
                justifyContent='center'
                borderRadius='0px 0px 64px 64px'
                id="home-section"


            >
                <HStack 
                h='10vh'
                minW='100vw' 
                p={2} 
                bg='blackAlpha.500'
                alignSelf='start' 
                justifyContent='space-between' 
                position='absolute'
                z-index='5000'
                >
                
                    <LeftContent />
                    
                    <RightContent navItems={navItems}/>

                    <HStack>
                        <button className="menuButton">
                            <MenuDrawer navItems={navItems} />
                        </button>
                    </HStack>
                </HStack>

            </Box>
    );
};

export default Header;