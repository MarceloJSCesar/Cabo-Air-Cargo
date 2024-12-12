import { Box, Image } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import defaultImage from '../../assets/header-img.jpg';

function HomeSection() {
  const [img, setImg] = useState(defaultImage);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the image URL from the API
  useEffect(() => {
    const fetchImg =  async () => {
      try {
        setIsLoading(true);
        const response =  await axios.get('https://cabo-air-cargo.onrender.com/api/s1/herobanner');
        setImg(response.data.imgUrl);
        console.log('Image URL:', response.data.imgUrl);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching the image URL:', error);
        setIsLoading(false);
      }
    };

    fetchImg();
  }, []);


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
        src={isLoading ? defaultImage : img}
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