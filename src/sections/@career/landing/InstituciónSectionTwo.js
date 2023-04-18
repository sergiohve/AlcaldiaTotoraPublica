import PropTypes from 'prop-types';
// icons
import cloudUpload from '@iconify/icons-carbon/cloud-upload';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Button, Box, Grid } from '@mui/material';
// components
import { Iconify, Image, SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const STEPS = [
  {
    title: '1',
    description: 'Permite la negociación integral de todas sus deudas con todos sus acreedores de manera ágil y efectiva. ',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_resume_job.svg',
  },
  {
    title: '2',
    description: 'Una vez sea admitido al trámite de insolvencia NO podrán iniciarle nuevos procesos ante la justicia. ',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_resume_job.svg',
  },
  {
    title: '3',
    description: 'Una vez sea admitido al trámite de insolvencia se suspenden los procesos que tenga en curso.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_search_job.svg',
  },
  {
    title: '4',
    description: 'Una vez sea admitido al trámite de insolvencia NO podrán suspenderle la prestación de los servicios públicos. ',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_search_job.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function InstituciónSectionTwo({titlesection, descriptionsection, actualizacioninfo, image}) {
  return (
    <RootStyle>
      <Container>
      <Grid container spacing={{ xs: 12, md: 6 }} justifyContent="space-between">
          <Grid item xs={12} md={8}>
        <Typography variant="h2"  align="left">
        {titlesection}
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }} align="left">
        Actualización: {actualizacioninfo}
        </Typography>
      

        <Typography sx={{ color: 'text.secondary', mx: 'auto' }} align="left">
        OBJETIVOS ESTRATEGICOS DE GESTIÓN
        </Typography>
        <Typography sx={{ color: 'text.secondary', mx: 'auto' }} align="left">
        <ul> 
        <li>Planes que aporten al Desarrollo Territorial</li>
        <li>Incrementar la cobertura de los servicios básicos.</li>
        <li>Apoyar y Mejorar la transformación industrial y manufacturera.</li>
        <li>Fortalecer el sector agropecuario y forestal.</li>
        <li>Mejorar los servicios de salud, educación, deporte.</li>
        </ul>
        </Typography>

        <Typography sx={{ color: 'text.secondary', mx: 'auto', mt: "50px" }} align="left">
        PLAN ESTRATÉGICO INSTITUCIONAL
        </Typography>
        <Typography sx={{ color: 'text.secondary', mx: 'auto' }} align="left">
        <ul> 
        <li>Pilar 1: Erradicación de la extrema pobreza</li>
        <li>Pilar 2: Universalización de los servicios básicos</li>
        <li>Pilar 3: Salud, Educación y Deporte para la formación de un ser humano integral</li>
        <li>Pilar 4: Soberanía comunitaria, financiera, sin servilismo al capitalismo financiero</li>
        <li>Pilar 5: Soberanía productiva con diversificación desarrollo integral sin la dictadura del mercado capitalista</li>
        <li>Pilar 6: Soberanía alimentaria</li>
        <li>Pilar 7: Soberanía ambiental con desarrollo integral, respetando los derechos de la Madre Tierra</li>
        <li>Pilar 8: Soberanía y transparencia en la gestión pública</li>
        <li>Pilar 9: Disfrute y felicidad</li>
      

        </ul>
        </Typography>
  
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography variant="h6" sx={{ mt: 3 }} align="center">
        Enlaces de Interés
        </Typography>
         
        </Grid>
        </Grid>

       
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

StepItem.propTypes = {
  index: PropTypes.number,
  value: PropTypes.shape({
    description: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
  }),
};

function StepItem({ value, index }) {
  return (
    <Container>
     <Typography variant="h3" sx={{ color: 'text.secondary' }}>
     {value.title}
      </Typography> 
     
      
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {value.description}
      </Typography>
    </Container>
  );
}
