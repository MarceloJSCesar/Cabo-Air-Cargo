import { HStack, Box, VStack } from "@chakra-ui/react";
import RightContent from "../../components/navbar/RightContent";
import LeftContent from "../../components/navbar/LeftContent";
import img from "../../assets/header-img.jpg";
import HomeSection from "../sections/HomeSection";
import MenuDrawer from "../../components/MenuDrawer/MenuDrawer";
import './Header.css';

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
                h={{base: '65vh'}}
                display='flex'
                flexDirection='row'
                alignItems='end'
                alignContent='center'
                justifyContent='center'
                borderRadius='0px 0px 64px 64px'
                id="home-section"
                bg='#82A1C4'

            >
                <HStack 
                    h='10vh'
                    minW='100vw' 
                    p={2} 
                    bg='transparent'
                    alignSelf='start' 
                    justifyContent='space-between' 
                    position='absolute'
                    z-index='5000'
                >
                
                    <LeftContent />
                    
                    <RightContent navItems={navItems}/>

                    <p className="navbar-mobile-title" > Cabo Air Cargo </p>

                    <HStack>
                        <button className="menuButton">
                            <MenuDrawer navItems={navItems} />
                        </button>
                    </HStack>
                </HStack>

                <HomeSection img={img}/>

            </Box>
    );
};

export default Header;