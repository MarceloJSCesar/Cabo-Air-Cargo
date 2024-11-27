import { Box, Image } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

function HomeSection({ img }) {
  const containerHeight = useBreakpointValue({ 
    base: '35vh',    // Smaller height for mobile
    sm: '45vh',      // Medium height for small tablets
    md: '65vh'       // Full height for desktop
  });

  return (
    <Box
      w='100%'
      h={containerHeight}
      position='relative'
      overflow='hidden'
      bg='#82A1C4'
    >
      <Image 
        src={img}
        objectFit='cover'
        objectPosition={{
          base: 'center 30%',  // Focus more on the center-top portion on mobile
          md: 'center 25%'     // Slightly adjusted for desktop
        }}
        h='100%'
        w='100%'
        loading="eager"
      />
    </Box>
  );
}

export default HomeSection;