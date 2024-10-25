import { Button, Flex } from '@chakra-ui/react';

function RightContent({navItems}) {

    return (
        <Flex alignItems='center' justifyContent='center' gap={4} mr={20}>
            {navItems?.map((item) => {
                return (
                    <Button 
                    key={item.name}
                    href={item.href}
                    color='white'
                    textDecoration='none'
                    border='none'
                    bg='transparent'
                    _hover={{background: 'blackAlpha.300'}}

                >
                    <strong>{item.name}</strong>
                </Button>
                );
            })}
        </Flex>
    );
}

export default RightContent;