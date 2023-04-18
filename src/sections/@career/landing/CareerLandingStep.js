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

export default function CareerLandingStep({titlesection, descriptionsection, actualizacioninfo, image}) {
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
        <Grid item xs={12} md={12} sx={{ mb: 5 }} align="left">
            <Image

              src={image}
              sx={{
                borderRadius: 1.5,
                transition: (theme) => theme.transitions.create('box-shadow'),
                '&:hover': {
                  boxShadow: (theme) => theme.customShadows.z24,
                },
                width: "95%",
                
              }}
            />
          </Grid>

        <Typography sx={{ color: 'text.secondary', mx: 'auto' }} align="left">
          {descriptionsection}
        </Typography>

        <Typography sx={{ color: 'text.secondary', mx: 'auto', mt: "50px" }} align="left">
        Puede descargar documentos complementarios en la parte inferior de esta página:
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
