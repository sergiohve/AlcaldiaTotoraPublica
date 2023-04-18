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

export default function HomeFlexibleComponents() {

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
          <Grid item xs={12} md={12}>
            <MotionViewport
              sx={{

                textAlign: { xs: 'center', md: 'center' },
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mt: 2, mb: 3 }} >
                  Encuentra tu Proposito
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h4" sx={{ color: 'text.secondary', mb: 5 }}>
                  Agenda tu Cita
                </Typography>
              </m.div>
            </MotionViewport>
          </Grid>
          <Grid container xs={12} md={12}>
            <Grid item xs={12} md={6}>
              <Stack

              >
                <BlockStyle>
                  <Card sx={{ boxShadow: (theme) => theme.customShadows.z24 }}>
                    <DateCalendar date={date} onChange={(newDate) => setDate(newDate)} disablePast={true} />
                  </Card>
                </BlockStyle>
              </Stack>
              <BlockStyle>
                <Button size="large" variant="contained" onClick={() => handleCita({ data: date, precio: 100 })} startIcon={<Iconify icon={addIcon} />}>
                  Agregar a Carrito Fecha de Cita
                </Button>

              </BlockStyle>
            </Grid>
            <Grid item xs={12} md={6}>

              <Grid item xs={12} md={12}>
                {addcarrito?.length > 0 ? <Stack

                ><Typography sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                    CARRITO DE COMPRAS
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Fecha</TableCell>
                          <TableCell align="center">Precio(USD)</TableCell>
                          <TableCell align="center">Acción</TableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {addcarrito?.map((add) => {
                          return (
                            <TableRow
                              key={add}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" align="left" scope="row">
                                {add?.data}
                              </TableCell>
                              <TableCell component="th" align="center" scope="row">
                                {add?.precio}
                              </TableCell>
                              <TableCell component="th" align="center" scope="row">
                                <Button variant="outlined" color="error" onClick={() => deleteregister(add?.data)}>
                                  Eliminar
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </Stack> : <Typography sx={{ textAlign: { xs: 'center', md: 'center' }, mt: 20 }}>
                   NO HAY REGISTRO DE CITAS
                  </Typography>
            }
                </Grid>




            

            </Grid>
          </Grid>

        </Grid>


      </Container>
    </RootStyle>
  );
}
