import { Link, Flex } from '@chakra-ui/react';

function RightContent({navItems}) {

    return (
        <Flex alignItems='center' justifyContent='center' gap={4} mr={20}>
            {navItems?.map((item) => {
                return (
                    <Link 
                    key={item.name}
                    href={item.href}
                    color='blue'
                    textDecoration='none'
                    border='none'
                >
                    {item.name}
                </Link>
                );
            })}
        </Flex>
    );
}

export default RightContent;