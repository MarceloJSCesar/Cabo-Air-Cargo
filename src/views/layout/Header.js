import { HStack, Box } from "@chakra-ui/react";
import RightContent from "../../components/navbar/RightContent";
import LeftContent from "../../components/navbar/LeftContent";
import img from "../../assets/header-img.jpg";
import HomeSection from "../sections/HomeSection";
import MenuDrawer from "../../components/MenuDrawer/MenuDrawer";
import './Header.css';

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
        <Box
            position="relative"
            id="home-section"
            overflow="hidden"
        >
            <HStack 
                h='10vh'
                minW='100%' 
                p={2} 
                bg='transparent'
                justifyContent='space-between' 
                position='absolute'
                top={0}
                left={0}
                zIndex={1000}
            >
                <LeftContent />
                <RightContent navItems={navItems}/>
                <p className="navbar-mobile-title">Cabo Air Cargo</p>
                <HStack>
                    <button className="menuButton">
                        <MenuDrawer navItems={navItems} />
                    </button>
                </HStack>
            </HStack>
            <HomeSection img={img}/>
        </Box>
    );
}

export default Header;