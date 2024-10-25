import { Button, Flex, Link } from '@chakra-ui/react';

function RightContent({navItems}) {

    return (
        <Flex alignItems='center' justifyContent='center' gap={4} mr={20}>
            {navItems?.map((item) => {
                return (
                   <Link
                        href={item.href}
                   >
                        <Button 
                            key={item.name}
                            color='white'
                            textDecoration='none'
                            border='none'
                            bg='transparent'
                            _hover={{background: 'blackAlpha.300'}}

                    >
                        <strong>{item.name}</strong>
                    </Button>
                   </Link> 
                );
            })}
        </Flex>
    );
}

export default RightContent;