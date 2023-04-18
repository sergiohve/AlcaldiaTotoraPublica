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
  Eventos
} from '../../../src/sections/Eventos';
import { MarketingFreeSEO } from '../../../src/sections/@marketing';

// ----------------------------------------------------------------------

personanatural.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function personanatural() {
 
  

  return (
    <Page title="Eventos">
      

      <Eventos/>

    
     <MarketingFreeSEO />
    </Page>
  );
}

// ----------------------------------------------------------------------

personanatural.getLayout = function getLayout(page) {
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
