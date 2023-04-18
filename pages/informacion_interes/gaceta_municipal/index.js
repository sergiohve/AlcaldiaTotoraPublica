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
  CareerLandingHero,
  CareerLandingStep,
  CareerLandingFeaturedJobs,
  CareerLandingTopCompanies,
  CareerLangdingConnections,
  CareerLandingHotCategories,
  CareerLangdingForRecruiters,
} from '../../../src/sections/@career';

// ----------------------------------------------------------------------

personanatural.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function personanatural({ posts }) {
  const { data: jobs = [], error } = useRequest('/api/career/jobs');
  const titlesection="Tramites Migratorios Estados Unidos"
  const descriptionsection="No es facil aceptar que se necesita ayuda cuando eres el dueño de tu empresa y se te cierran los caminos financieros y las oportunidades de negocio, pero buscar ayuda especializada puede marcar la diferencia entre el fracaso de tu negocio, o el renacer de tus proyectos."

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Tramites Migratorios Estados Unidos">
      <CareerLandingStep titlesection={titlesection} descriptionsection={descriptionsection}/>

{/*<CareerLandingFeaturedJobs jobs={jobs.slice(-6)} />*/}

{/*<CareerLandingTopCompanies companies={_jobsByCompanies} />*/}

{/*<CareerLandingHotCategories categories={_jobsByCategories} />*/}

{/*<CareerLangdingConnections countries={_jobsByCountries} />*/}

{/*<CareerLangdingForRecruiters />*/}

{/*<TestimonialsCareer testimonials={_testimonials} />*/}

{/*<OurClientsCareer brands={_brandsColor} />*/}

{/*<BlogCareerLatestPosts posts={posts.slice(0, 5)} />*/}

{/* <DownloadAppCareer />*/}

<NewsletterCareer />
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
