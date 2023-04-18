import { useRef } from 'react';
// icons
import launchIcon from '@iconify/icons-carbon/launch';


// hooks
import { useBoundingClientRect } from '../../hooks';
import Slider from 'react-slick';

import { CarouselDots, CarouselArrows } from '../../components';
import cssStyles from '../../utils/cssStyles';
import { styled, alpha } from '@mui/material/styles';
// routes
import Routes from '../../routes';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui

import { Stack, Button, Typography, Grid } from '@mui/material';

// components
import { Image, Iconify } from '../../components';


// ----------------------------------------------------------------------



// ----------------------------------------------------------------------
const IMAGENES = [
  {
    img: "https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg",
    title: "¿Tu empresa se viene abajo por falta de liquidez?",
    response: "Te ayudo a conseguir tranquilidad financiera a través de la ley de reorganización empresarial."
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/menu/menu_course.jpg",
    title: "¿Quieres emprender y no sabes cómo hacerlo?",
    response: "Te enseño cómo puedes construir un mapa de ruta exitoso a partir de cero."
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg",
    title: "¿Quieres emigrar a Estados Unidos?",
    response: "Te ayudo a hacerlo de forma legal y te acompaño en el proceso."
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg",
    title: '"SI NO TRABAJAS POR TUS SUEÑOS, ALGUIEN TE CONTRATARA PARA QUE TRABAJES POR LOS SUYOS."',

  }
];

export default function HomeAtractivosTuristicos() {
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
    padding: theme.spacing(3, 16),
    marginBottom: "100px",
    
    alignItems: "center",
    textAlign: "center",



  }));


  return (
    <RootStyle>
      <Stack alignItems="left">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={12}  sx={{ mb: 5 }}>
            <Typography variant="h3" align='center'>
             Atractivos Turísticos:
            </Typography>
          
          </Grid>
          <Grid item xs={12} md={4} spacing={{ xs: 12, md: 4 }} sx={{ mb: 5 }}>
            <Image

              src={`https://www.gamvinto.gob.bo/uploads/thumb/thumb_350/uploads/atractivo/anocarair_6dae324c726afab.jpeg`}
              sx={{
                borderRadius: 1.5,
                transition: (theme) => theme.transitions.create('box-shadow'),
                '&:hover': {
                  boxShadow: (theme) => theme.customShadows.z24,
                },
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} spacing={{ xs: 12, md: 4 }}>
            <Image

              src={`https://www.gamvinto.gob.bo/uploads/thumb/thumb_350/uploads/atractivo/screen-shot-2022-09-28-at-122001_1d6c78dbeda6d10.png`}
              sx={{
                borderRadius: 1.5,
                transition: (theme) => theme.transitions.create('box-shadow'),
                '&:hover': {
                  boxShadow: (theme) => theme.customShadows.z24,
                },
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} spacing={{ xs: 12, md: 6 }}>
            <Image

              src={`https://www.gamvinto.gob.bo/uploads/thumb/thumb_350/uploads/atractivo/lagunakeraya_d5ec8178b362af4.png`}
              sx={{
                borderRadius: 1.5,
                transition: (theme) => theme.transitions.create('box-shadow'),
                '&:hover': {
                  boxShadow: (theme) => theme.customShadows.z24,
                },
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} spacing={{ xs: 12, md: 4 }}>
            <Image

              src={`https://www.gamvinto.gob.bo/uploads/thumb/thumb_350/uploads/atractivo/lagunakeraya_d5ec8178b362af4.png`}
              sx={{
                borderRadius: 1.5,
                transition: (theme) => theme.transitions.create('box-shadow'),
                '&:hover': {
                  boxShadow: (theme) => theme.customShadows.z24,
                },
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </Grid>





        </Grid>
      </Stack>



    </RootStyle>
  );
}
