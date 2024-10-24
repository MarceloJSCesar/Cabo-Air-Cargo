import { HStack } from "@chakra-ui/react";
import RightContent from "../../components/navbar/RightContent";
import LeftContent from "../../components/navbar/LeftContent";

function Header() {
    return (
        <HStack w='full' p={2} display='flex' alignItems='center' justifyContent='space-between'>
            
            <LeftContent />
            
            <RightContent />
        </HStack>
    );
};

export default Header;