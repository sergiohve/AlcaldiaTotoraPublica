import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Paper, Container, Typography } from '@mui/material';
// components
import { Image } from '../../components';
import { MotionViewport, varFade } from '../../components/animate';
import Alcalde from "../../assets/totora1.jpeg"
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeNewStart() {
  return (
    <RootStyle>
      <Container>
        <Paper
          sx={{
            pb: 10,
            borderRadius: 3,
            textAlign: 'center',
            bgcolor: 'background.neutral',
            display: "flex",
            flexWrap: "wrap"
          }}
          component={MotionViewport}
        >
          <m.div variants={varFade().inUp}>
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
          </m.div>

          <Box sx={{ mt: 3, mx: 'auto', px: 3 }}>


            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {''} Nuestro Alcalde {''}
                </Box>
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography sx={{ color: 'text.secondary', textAlign: "left" }}>
                <Box>Alcalde del Gobierno Autónomo Municipal de Totora</Box>


              </Typography>
            </m.div>
          </Box>
        </Paper>
      </Container>
    </RootStyle>
  );
}
