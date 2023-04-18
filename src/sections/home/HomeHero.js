import { useRef } from 'react';
// icons
import launchIcon from '@iconify/icons-carbon/launch';

import { Box, Stack, Button, Container, Typography, Grid } from '@mui/material';
// hooks
import { useBoundingClientRect } from '../../hooks';
import Slider from 'react-slick';

import { CarouselDots, CarouselArrows } from '../../components';
import cssStyles from '../../utils/cssStyles';
import { styled, alpha } from '@mui/material/styles';
// routes
import Routes from '../../routes';
// components
import { Image, Iconify } from '../../components';
import { useEffect } from 'react';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------
const IMAGENES = [
  {
    img: "https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg",
    title: "Visita nuestro municipio",
    response: "Recibe un poco de ayuda de nuestro gobierno"
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/menu/menu_course.jpg",
    title: "Conoce Totora",
    response: "Totora es un municipio muy turistico"
  }
];

export default function HomeHero() {
  const containerRef = useRef(null);
  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;
  const carouselRef = useRef(null);

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 0),
    ...cssStyles(theme).bgImage({
      url: 'https://zone-assets-api.vercel.app/assets/images/career/career_newsletter.jpg',
      startColor: `${alpha(theme.palette.grey[700], 0.2)}`,
      endColor: `${alpha(theme.palette.grey[600], 0.2)}`,
    }),
  }));

  const carouselSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({ sx: { my: 14 } }),
  };

  return (
    <RootStyle>
  
    <Container >
      <CarouselArrows
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{
          
          marginTop: "100px"
        }}
      >
        <Slider ref={carouselRef} {...carouselSettings} >
          {IMAGENES.map((img, index) => (
            <Box key={index} sx={{ px: 1,color: "white",  marginTop: "150px", marginLeft: "auto", marginRight: "auto" }} >
              <Typography variant="h1" sx={{ mt: 2, mb: 3 }}>{img.title}</Typography>
              <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>{img.response}</Typography>

            </Box>
          ))}
        </Slider>
      </CarouselArrows>
    </Container>
    
    </RootStyle>
  );
}
