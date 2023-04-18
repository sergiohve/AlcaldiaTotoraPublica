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
  Enlaces
} from '../../../src/sections/Enlaces';
import { MarketingFreeSEO } from '../../../src/sections/@marketing';

// ----------------------------------------------------------------------

inversioninmobiliaria.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function inversioninmobiliaria({ posts }) {
  const { data: jobs = [], error } = useRequest('/api/career/jobs');
  const titlesection="Inversión Inmobiliaria Estados Unidos"
  const descriptionsection="No es facil aceptar que se necesita ayuda cuando eres el dueño de tu empresa y se te cierran los caminos financieros y las oportunidades de negocio, pero buscar ayuda especializada puede marcar la diferencia entre el fracaso de tu negocio, o el renacer de tus proyectos."
  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Enlaces">
     <Enlaces titlesection={titlesection} descriptionsection={descriptionsection} />

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
