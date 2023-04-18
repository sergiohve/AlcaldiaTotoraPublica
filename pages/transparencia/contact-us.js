// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { NewsletterMarketing } from '../../src/sections/newsletter';
import {
  MarketingFreeSEO,
  MarketingContactInfo,
  MarketingContactForm,
} from '../../src/sections/@marketing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingContactUsPage() {
  return (
    <Page title="Contact Us - Marketing">
      <RootStyle>
       
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingContactUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
