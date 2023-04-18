import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
// next
import NextLink from 'next/link';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// components
import { Image, TextMaxLine, CarouselArrows } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

CareerLandingTopCompanies.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default function CareerLandingTopCompanies({ companies }) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const carouselSettings = {
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <RootStyle>
      <Container>
       
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

CompanyItem.propTypes = {
  company: PropTypes.shape({
    companyLogo: PropTypes.string,
    companyName: PropTypes.string,
    totalJobs: PropTypes.number,
  }),
};

function CompanyItem({ company }) {
  return (
    <NextLink href={Routes.institucion.jobs} passHref>
      <Box
        sx={{
          py: 5,
          px: 3,
          borderRadius: 2,
          cursor: 'pointer',
          textAlign: 'center',
          position: 'relative',
          transition: (theme) =>
            theme.transitions.create('all', {
              duration: theme.transitions.duration.enteringScreen,
            }),
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Image
          alt={company.companyName}
          src="data:image/jpeg;base64,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"
          sx={{
            mx: 'auto',
            width: "100%",
            height: "100%",
            borderRadius: 1,
          }}
        />
        <Typography variant="body3" sx={{ color: 'text.disabled', mt: 2.5, mb: 0.5 }}>
          Serenata Virgen del Valle
        </Typography>
        <TextMaxLine variant="subtitle2" persistent>
          Fecha: 24/04/2023 - Lugar: Parroquia de Totora
        </TextMaxLine>
      </Box>
    </NextLink>
  );
}
