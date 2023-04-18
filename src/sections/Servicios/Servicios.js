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
import { CalendarPicker } from '@mui/x-date-pickers';
// routes
import Routes from '../../routes';
// _data

import { MotionViewport, varFade } from '../../components/animate';
import { FabButtonAnimate, Iconify } from '../../components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Catastro from './ServiciosInternos/Catastro';
import Intendencia from './ServiciosInternos/Intendencia';
import Salud from './ServiciosInternos/Salud';
import Educacion from './ServiciosInternos/Educacion';
import Recojo from './ServiciosInternos/RecojoBasura';
import RecojoBasura from './ServiciosInternos/RecojoBasura';
import ServiciosBasicos from './ServiciosInternos/ServiciosBasicos';
import Urbanismo from './ServiciosInternos/Urbanismo';




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
   localStorage.setItem("Module_Servicios",num)
    setActive(num)

  }
  useEffect(() => {
    if(active==null){
      localStorage.setItem("Module_Servicios","1")
     }
   
    
   }, [active]);
  useEffect(() => {
   const module= localStorage.getItem("Module_Servicios")
   setActive(module)
  }, [active]);

  return (
    <RootStyle>
      <Container>
      <Grid container spacing={{ xs: 12, md: 0 }} xs={12} md={12}>
      <Grid item spacing={{ xs: 12, md: 12 }} xs={12} md={3}>
      <Typography variant="h4" align="left">
            Menú de Servicios
            </Typography>
          <Grid  xs={12} md={6} style={active=="1" ? STYLE.active : STYLE.inactive} onClick={()=>handleClick("1")}>
            Catastro
          </Grid>
          <Grid  xs={12} md={6} style={active=="2" ? STYLE.active : STYLE.inactive} onClick={()=>handleClick("2")}>
            Intendencia
          </Grid>
          <Grid  xs={12} md={6} style={active=="3" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("3")}>
            Salud
          </Grid>
          <Grid  xs={12} md={6} style={active=="4" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("4")}>
            Educación
          </Grid>
          <Grid  xs={12} md={6} style={active=="5" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("5")}>
            Recojo de Basura
          </Grid>
          <Grid  xs={12} md={6} style={active=="6" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("6")}>
            Servicios Básicos
          </Grid>
          <Grid  xs={12} md={6} style={active=="7" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("7")}>
            Urbanismo
          </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
      {active=="1" && <Catastro/>}
      {active=="2" && <Intendencia/>}
      {active=="3" && <Salud/>}
      {active=="4" && <Educacion/>}
      {active=="5" && <RecojoBasura/>}
      {active=="6" && <ServiciosBasicos/>}
      {active=="7" && <Urbanismo/>}

      
      
          
        </Grid>


      </Grid>


       
      </Container>
    </RootStyle>
  );
}
