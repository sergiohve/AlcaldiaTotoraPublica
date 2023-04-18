import PropTypes from 'prop-types';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/career/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import {
  _brandsColor,
  _testimonials,
  _jobsByCompanies,
  _jobsByCategories,
  _jobsByCountries,
} from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
import {
  Noticias
} from '../../../src/sections/Noticias';
import { MarketingFreeSEO } from '../../../src/sections/@marketing';

CareerLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function CareerLandingPage({ posts }) {
  const { data: jobs = [], error } = useRequest('/api/career/jobs');
  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Noticias">
       <Noticias />
       <MarketingFreeSEO />
    </Page>
  );
}


CareerLandingPage.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
};


export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
