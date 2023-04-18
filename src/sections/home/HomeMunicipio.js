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

export default function HomeMunicipio() {
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
    opacity: "0.7",
    alignItems: "center",
    textAlign: "center",



  }));


  return (
    <RootStyle>
      <Stack alignItems="left">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={6} spacing={{ xs: 12, md: 12 }}>
            <Typography variant="h3" align='left'>
              Conoce un poco de nuestro municipio:
            </Typography>
            <Typography variant="h5" paragraph align='left'>
              Localizado en el departamento de Cochabamba, Totora es un municipio cuya superficie, población, altitud y otra información importante se proporciona a continuación.
              Para todos sus procedimientos administrativos, puede dirigirse al Gobierno Autónomo Municipal de Totora en la dirección y horarios indicados en esta página, o contactar al ayuntamiento por teléfono o por correo electrónico según su preferencia y datos disponibles.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} spacing={{ xs: 12, md: 6 }}>
            <Image

              src={`https://zone-assets-api.vercel.app/assets/illustrations/illustration_newsletter.svg`}
              sx={{
                borderRadius: 1.5,
                transition: (theme) => theme.transitions.create('box-shadow'),
                '&:hover': {
                  boxShadow: (theme) => theme.customShadows.z24,
                },
                width: "50%",
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
