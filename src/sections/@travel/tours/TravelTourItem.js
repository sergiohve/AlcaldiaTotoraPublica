import PropTypes from 'prop-types';
import { useState } from 'react';
// icons
import timeIcon from '@iconify/icons-carbon/time';
// next
import NextLink from 'next/link';
// @mui
import { Divider, Stack, Card, Typography, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import {
  Image,
  Iconify,
  RatingLabel,
  TextMaxLine,
  TextIconLabel,
  FavoriteButton,
} from '../../../components';

// ----------------------------------------------------------------------

TravelTourItem.propTypes = {
  tour: PropTypes.shape({
    coverImg: PropTypes.string,
    duration: PropTypes.string,
    favorited: PropTypes.bool,
    id: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    ratings: PropTypes.number,
    slug: PropTypes.string,
  }),
};

export default function TravelTourItem({ tour }) {
  const { id, slug, location, price, priceSale, favorited, duration, ratings, coverImg } = tour;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };

  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 1.5,
          pl: 2,
          pr: 1.5,
          top: 0,
          width: 1,
          zIndex: 9,
          position: 'absolute',
        }}
      >
        <Stack
          spacing={0.5}
          direction="row"
          sx={{
            px: 1,
            borderRadius: 0.75,
            typography: 'subtitle2',
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          }}
        >
         
        </Stack>

        <FavoriteButton
          checked={favorite}
          onChange={handleChangeFavorite}
          sx={{ color: 'common.white' }}
        />
      </Stack>

      <Image alt={slug} src={coverImg} ratio="1/1" />

      <Stack spacing={0.5} sx={{ p: 2.5 }}>
        <Typography variant="body3" sx={{ color: 'text.secondary' }}>
          {location}
        </Typography>

        <NextLink as={Routes.travel.tour(id)} href={Routes.travel.tour('[id]')} passHref>
          <TextMaxLine variant="h6" asLink persistent>
            {slug}
          </TextMaxLine>
        </NextLink>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" justifyContent="space-between" sx={{ p: 2.5 }}>
        <TextIconLabel
          icon={<Iconify icon={timeIcon} sx={{ mr: 1, width: 16, height: 16 }} />}
          value={duration}
          sx={{
            typography: 'body3',
            color: 'text.disabled',
          }}
        />

       
      </Stack>
    </Card>
  );
}
