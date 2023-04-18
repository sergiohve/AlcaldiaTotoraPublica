import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Stack,
  Container,
  Typography,
  Slider as MUISlider,

} from '@mui/material';

import NominaAutoridades from './ServiciosInternos/NominaAutoridades';
import NominaPersonal from './ServiciosInternos/NominaPersonal';
import ManualFunciones from './ServiciosInternos/ManualFunciones';





const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 5),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const BlockStyle = styled((props) => (
  <Stack
    spacing={0}
    width={1}
    direction="row"
    alignItems="center"
    justifyContent="center"
    flexWrap="wrap"
    {...props}
  />
))({
  '& > *': {
    marginTop: '20px !important',
    marginBottom: '20px !important',
  },
});


// ----------------------------------------------------------------------
const STYLE = {
  active: {
    color: "red",
    cursor: "pointer",
    fontWeight: "bold",
    textAlign: "left",
    width: "100%"

  },
  inactive: {
    cursor: "pointer"
  }

};
export default function Servicios() {

  const [active, setActive] = useState("1");
  const handleClick = (num, text) => {
    localStorage.setItem("Module_RecursosHumanos", num)
    setActive(num)

  }
  useEffect(() => {
    if (active == null) {
      localStorage.setItem("Module_RecursosHumanos", "1")
    }


  }, [active]);
  useEffect(() => {
    const module = localStorage.getItem("Module_RecursosHumanos")
    setActive(module)
  }, [active]);

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={{ xs: 12, md: 0 }} xs={12} md={12}>
          <Grid item spacing={{ xs: 12, md: 12 }} xs={12} md={4}>
            <Typography variant="h4" align="left">
              Menú de Recursos Humanos
            </Typography>
            <Grid xs={12} md={6} style={active == "1" ? STYLE.active : STYLE.inactive} onClick={() => handleClick("1")}>
              Nómina de Autoridades
            </Grid>
            <Grid xs={12} md={6} style={active == "2" ? STYLE.active : STYLE.inactive} onClick={() => handleClick("2")}>
              Nomina del Personal Dependiente
            </Grid>



            <Grid xs={12} md={6} style={active == "6" ? STYLE.active : STYLE.inactive} onClick={() => handleClick("6")}>
              Manual de Funciones
            </Grid>

          </Grid>
          <Grid item xs={12} md={8}>
            {active == "1" && <NominaAutoridades />}
            {active == "2" && <NominaPersonal />}

            {active == "6" && <ManualFunciones />}





          </Grid>


        </Grid>



      </Container>
    </RootStyle>
  );
}
