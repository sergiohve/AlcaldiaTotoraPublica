import PropTypes from 'prop-types';
// @mui
import { m } from 'framer-motion';
import { Pagination, Box, Typography } from '@mui/material';
// components
import { TourItemSkeleton } from '../../../components/skeleton';
//
import TravelTourItem from './TravelTourItem';

// ----------------------------------------------------------------------

TravelTourList.propTypes = {
  loading: PropTypes.bool,
  tours: PropTypes.array,
};

export default function TravelTourList({ tours, loading }) {
  return (
    <>
      <m.div>
        <Typography variant="h2" sx={{ mt: 5, mb: 5, textAlign: { xs: 'center', md: 'center' } }} >
          La Importancia de tus Finanzas
        </Typography>
      </m.div>
      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {(loading ? [...Array(8)] : tours).map((tour, index) =>
          tour ? <TravelTourItem key={tour.id} tour={tour} /> : <TourItemSkeleton key={index} />
        )}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          pt: 10,
          pb: { xs: 10, md: 15 },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
