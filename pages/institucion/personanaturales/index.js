// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// hooks
import { useRequest } from '../../../src/hooks';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { NewsletterCareer } from '../../../src/sections/newsletter';
import { CareerJobList, CareerJobBarFilters } from '../../../src/sections/@career';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function CareerJobsPage() {
  const { data: jobs = [], error, isLoading } = useRequest('/api/services_juridicos/jobs');
console.log(jobs)
  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Jobs - Career">
      <RootStyle>
        <Container>
          <CareerJobBarFilters />
          <CareerJobList jobs={jobs} loading={isLoading} />
        </Container>
        <NewsletterCareer />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

CareerJobsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
