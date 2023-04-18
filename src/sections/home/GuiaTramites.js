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
import _mock from '../../../_data/mock';
import { MotionViewport, varFade } from '../../components/animate';
import { FabButtonAnimate, Iconify } from '../../components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




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

export default function GuiaTramites() {

  const [addcarrito, setAddcarrito] = useState();
  const del = new Date().toLocaleDateString()
  const [date, setDate] = useState(new Date());

  const [arrayDate, setArrayDate] = useState([]);


  console.log(addcarrito)




  const handleCita = (data) => {

    arrayDate.push(data)
    console.log(arrayDate)
    localStorage.setItem('citaapartada', JSON.stringify(arrayDate));

  }

  useEffect(() => {

    const local = JSON.parse(localStorage.getItem('citaapartada'));
    setAddcarrito(local)


  }, [arrayDate]);
  const deleteregister = (datadelete) => {

    let index = addcarrito.indexOf(datadelete)
    arrayDate.splice(index, 1)
    localStorage.setItem('citaapartada', JSON.stringify(arrayDate))
    const local = JSON.parse(localStorage.getItem('citaapartada'));
    setAddcarrito(local)
  }



  return (
    <RootStyle>
      <Container>
        <Grid container spacing={{ xs: 12, md: 6 }} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" align="left">
              Formularios
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }} align="left">
              Actualización: 15/04/2023
            </Typography>
            <Grid item xs={12} md={12} sx={{ mb: 5 }} align="left">

              Formularios
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" align="left">
              Flujos de proceso
            </Typography>
            <Typography sx={{ color: 'text.secondary', mx: 'auto', mb: 3 }} align="left">
              Actualización: 15/04/2023
            </Typography>
            <Grid item xs={12} md={12} sx={{ mb: 5 }} align="left">


              <Typography sx={{ color: 'text.secondary', mx: 'auto' }} align="left">
                REQUISITOS PARA LA INSTALACIÓN DE AGUA POTABLE Y/O ALCANTARILLADO
              </Typography>
              <Typography sx={{ color: 'text.secondary', mx: 'auto' }} align="left">
                <ul>
                  <li>Elaborará una solicitud de INSTALACION, CAMBIO DE NOMBRE, RENOVACIÓN de agua y/o alcantarillado dirigido a la Sra. Alcaldesa Dra. María Patricia Arce Guzmán.</li>
                  <li>Fotocopia de Cedula de Identidad.</li>
                  <li>Fotocopia del plano aprobado por el Gobierno Autónomo Municipal de Vinto y minuta de trasferencia.</li>
                  <li>Certificado de defunción u otros (para cambio de nombre).</li>
                  <li>Ultima papeleta de pago agua y/o alcantarillado (para cambio de nombre).</li>
                  <li>Fotocopia de la última papeleta de pago de impuestos.</li>
                  <li>Comprar un folder de trámite administrativo de CAJA del Gobierno Autónomo Municipal de Viento, para el trámite de agua y/o alcantarillado.</li>
                  <li>Programar la inspección técnica en secretaria de Saneamiento Básico, Para su informe respectivo, para el trámite de agua y/o alcantarillado.</li>
                  <li>on el informe de cancelación otorgado pagar Bs 150,00 (Ciento cincuenta 00/100 bolivianos), en caja del Gobierno Autónomo Municipal de Vinto.</li>
                </ul>
              </Typography>


            </Grid>
          </Grid>
        </Grid>


      </Container>
    </RootStyle>
  );
}
