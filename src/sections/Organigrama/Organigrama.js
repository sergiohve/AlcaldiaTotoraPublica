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
import TableDocuments from '../TableDocuments';






const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 5),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 0),
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
export default function Organigrama() {

  

  return (
    <RootStyle>
      <Container>
        <Grid container xs={12} md={12}>
          <Grid item xs={12} md={12}>
          <Grid xs={12} md={12}>
            <Typography variant="h2" align="left">
            Organigrama
            </Typography>
            <Typography sx={{ color: 'text.secondary', mx: 'auto', mb: 3 }} align="left">
                Actualización: 15/04/2023
            </Typography>
            <Grid xs={12} md={8} sx={{ mb: 5 }} align="left">
            <TableDocuments/>
            
              
            </Grid>
        </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
