import { HStack, Box } from "@chakra-ui/react";
import RightContent from "../../components/navbar/RightContent";
import LeftContent from "../../components/navbar/LeftContent";
// import img from "../../assets/header-img.jpg";
import HomeSection from "../sections/HomeSection";

import MenuDrawer from "../../components/MenuDrawer/MenuDrawer";
import './Header.css';

function Header() {
    const navItems = [
        {
            name: 'Home',
            href: '#',
        },
        {
            name: 'Como Funciona',
            href: '#how-it-works',
        },
        {
            name: 'Sobre Nós',
            href: '#about-us',
        },
        {
            name: 'Contatos',
            href: '#contact-us',
        },
    ];

    return (
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

            <HomeSection />
        </Box>
    );
}

export default Header;