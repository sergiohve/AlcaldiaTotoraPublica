import { m } from 'framer-motion';
import { useEffect, useState } from 'react';
// icons
import addIcon from '@iconify/icons-carbon/add';
import cloudUpload from '@iconify/icons-carbon/cloud-upload';
import mediaLibrary from '@iconify/icons-carbon/media-library';
import chevronRight from '@iconify/icons-carbon/chevron-right';
import alignHorizontalLeft from '@iconify/icons-carbon/align-horizontal-left';
import alignHorizontalRight from '@iconify/icons-carbon/align-horizontal-right';
import alignHorizontalCenter from '@iconify/icons-carbon/align-horizontal-center';
// next
import NextLink from 'next/link';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// @mui
import { styled } from '@mui/material/styles';
import {
  Tab,
  Chip,
  Grid,
  Tabs,
  Card,
  Stack,
  Alert,
  Radio,
  Avatar,
  Rating,
  Button,
  Switch,
  Tooltip,
  Checkbox,
  TextField,
  Container,
  Typography,
  AvatarGroup,
  ToggleButton,
  CircularProgress,
  FormControlLabel,
  ToggleButtonGroup,
  Slider as MUISlider,
  Box,
} from '@mui/material';

// routes
import ReglamentosAdministrativos from './ServiciosInternos/ReglamentosAdministrativos';
import ManualesInternos from './ServiciosInternos/ManualesInternos';





const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 5),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));




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
export default function ReglamentosManuales() {

  const [active, setActive] = useState("1"); 
  const handleClick = (num, text) => {
   localStorage.setItem("Module_RendicionCuentas",num)
    setActive(num)

  }
  useEffect(() => {
    if(active==null){
      localStorage.setItem("Module_RendicionCuentas","1")
     }
  
   }, [active]);
  useEffect(() => {
   const module= localStorage.getItem("Module_RendicionCuentas")
   setActive(module)
  }, [active]);

  return (
    <RootStyle>
      <Container>
      <Grid container spacing={{ xs: 12, md: 0 }} xs={12} md={12}>
      <Grid item spacing={{ xs: 12, md: 12 }} xs={12} md={4}>
      <Typography variant="h4" align="left">
            Menú de Reglamentos y Manuales
            </Typography>
          <Grid  xs={12} md={12} style={active=="1" ? STYLE.active : STYLE.inactive} onClick={()=>handleClick("1")}>
            Reglamentos Administrativos
          </Grid>
          <Grid  xs={12} md={12} style={active=="2" ? STYLE.active : STYLE.inactive} onClick={()=>handleClick("2")}>
         Manuales Internos
          </Grid>
          
         
      </Grid>
      <Grid item xs={12} md={8}>
      {active=="1" && <ReglamentosAdministrativos/>}
      {active=="2" && <ManualesInternos/>}
      
     

      
      
          
        </Grid>


      </Grid>


       
      </Container>
    </RootStyle>
  );
}
