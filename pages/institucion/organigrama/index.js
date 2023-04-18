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
// sections
import { NewsletterCareer } from '../../../src/sections/newsletter';
import { DownloadAppCareer } from '../../../src/sections/download-app';
import { BlogCareerLatestPosts } from '../../../src/sections/blog';
import { TestimonialsCareer } from '../../../src/sections/testimonials';
import { OurClientsCareer } from '../../../src/sections/our-clients';
import {
  Organigrama
} from '../../../src/sections/Organigrama';
import { MarketingFreeSEO } from '../../../src/sections/@marketing';

// ----------------------------------------------------------------------

inversioninmobiliaria.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function inversioninmobiliaria({ posts }) {
  const { data: jobs = [], error } = useRequest('/api/career/jobs');
  const titlesection="Organigrama"
  const actualizacioninfo= "14/04/2023"
  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Organigrama">
     <Organigrama  />

<MarketingFreeSEO />
    </Page>
  );
}

// ----------------------------------------------------------------------

inversioninmobiliaria.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
