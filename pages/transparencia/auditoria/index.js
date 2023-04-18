import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/marketing/posts';
import { getAllCaseStudies } from '../../../src/utils/get-mardown/marketing/case-studies';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page } from '../../../src/components';
// sections
import { NewsletterMarketing } from '../../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../../src/sections/testimonials';
import { BlogMarketingLatestPosts } from '../../../src/sections/blog';
import { MarketingFreeSEO, MarketingCaseStudiesList } from '../../../src/sections/@marketing';
import {Auditoria } from '../../../src/sections/Auditoria';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

auditoria.propTypes = {
  caseStudies: PropTypes.array,
  posts: PropTypes.array,
};

export default function auditoria({ posts, caseStudies }) {
  return (
    <Page title="Case Studies - Marketing">
      <RootStyle>
      
      <Auditoria />
        <MarketingFreeSEO />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

auditoria.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
      caseStudies: getAllCaseStudies(),
    },
  };
}
