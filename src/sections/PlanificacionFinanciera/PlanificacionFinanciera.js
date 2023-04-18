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
import POA from './ServiciosInternos/POA';
import PTDI from './ServiciosInternos/PTDI';
import PresupuestoInstitucional from './ServiciosInternos/PresupuestoInstitucional';
import PlanesSectoriales from './ServiciosInternos/PlanesSectoriales';

import PAC from './ServiciosInternos/PAC';
import EjecucionPresupuestaria from './ServiciosInternos/EjecucionPresupuestaria';
import FuentesFinanciamiento from './ServiciosInternos/FuentesFinanciamiento';
import InformesGestion from './ServiciosInternos/InformesGestion';
import NominaProveedores from './ServiciosInternos/NominaProveedores';
import ConvocatoriaBienes from './ServiciosInternos/ConvocatoriaBienes';




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
export default function PlanificacionFinanciera() {

  const [active, setActive] = useState("1"); 
  const handleClick = (num, text) => {
   localStorage.setItem("Module_PlanificacionFinanciera",num)
    setActive(num)

  }
  useEffect(() => {
    if(active==null){
      localStorage.setItem("Module_PlanificacionFinanciera","1")
     }
   
    
   }, [active]);
  useEffect(() => {
   const module= localStorage.getItem("Module_PlanificacionFinanciera")
   setActive(module)
  }, [active]);

  return (
    <RootStyle>
      <Container>
      <Grid container spacing={{ xs: 12, md: 0 }} xs={12} md={12}>
      <Grid item spacing={{ xs: 12, md: 12 }} xs={12} md={5}>
      <Typography variant="h4" align="left">
            Menú de Planificación Financiera
            </Typography>
          <Grid  xs={12} md={6} style={active=="1" ? STYLE.active : STYLE.inactive} onClick={()=>handleClick("1")}>
            POA
          </Grid>
          <Grid  xs={12} md={6} style={active=="2" ? STYLE.active : STYLE.inactive} onClick={()=>handleClick("2")}>
            PTDI
          </Grid>
          <Grid  xs={12} md={6} style={active=="3" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("3")}>
            Presupuesto Institucional
          </Grid>
          <Grid  xs={12} md={6} style={active=="4" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("4")}>
          Planes Sectoriales
          </Grid>
          <Grid  xs={12} md={6} style={active=="5" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("5")}>
            PAC
          </Grid>
          <Grid  xs={12} md={6} style={active=="6" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("6")}>
          Ejecución Presupuestaria
          </Grid>
          <Grid  xs={12} md={6} style={active=="7" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("7")}>
            Fuentes de Financiamiento
          </Grid>
          <Grid  xs={12} md={6} style={active=="8" ? STYLE.active :  STYLE.inactive} onClick={()=>handleClick("8")}>
            Informes de Gestión
          </Grid>
          
      </Grid>
      <Grid item xs={12} md={7}>
      {active=="1" && <POA/>}
      {active=="2" && <PTDI/>}
      {active=="3" && <PresupuestoInstitucional/>}
      {active=="4" && <PlanesSectoriales/>}
      {active=="5" && <PAC/>}
      {active=="6" && <EjecucionPresupuestaria/>}
      {active=="7" && <FuentesFinanciamiento/>}
      {active=="8" && <InformesGestion/>}
     
     

      
      
          
        </Grid>


      </Grid>


       
      </Container>
    </RootStyle>
  );
}
