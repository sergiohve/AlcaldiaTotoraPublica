import { m, useCycle, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link'
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// hooks
import { useSettings } from '../../hooks';
// config
import { defaultSettings, DRAWER_WIDTH } from '../../config';

import Image from '../Image';

// ----------------------------------------------------------------------




const Boxx = styled((props) => <Box {...props} />)(({ theme }) => ({

  right: 0,
  bottom: 0,
  position: 'fixed',
  marginRight: "10px",
  marginTop: "0px",
  marginBottom: "10px",
  borderRadius: "100px",
  height: "80px",
  cursor: "pointer",
  zIndex: "100",
  boxShadow: "2px 2px 10px 3px"



}));


// ----------------------------------------------------------------------

export default function Wp() {
 

  

  return (
      <Boxx component={m.div} >
        <m.div>
        <Link href="https://wa.link/u7qfee" target='_blank'>
          <Image
            alt="500"
          
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwLT9DM_zfGJWh769XOGm6acyWoFcq1uc_-Y1jrURytA&s"
            sx={{
              maxWidth: 80,
              my: { xs: 2, sm: 0 },
              borderRadius: "100px"
            }}
          />
          </Link>
        </m.div>
      </Boxx>
  );
}
