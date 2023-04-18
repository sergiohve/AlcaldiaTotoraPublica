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
 
  InstituciónSectionTwo,
} from '../../../src/sections/@career';
import { MarketingFreeSEO } from '../../../src/sections/@marketing';

// ----------------------------------------------------------------------

personanatural.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function personanatural({ posts }) {
  const { data: jobs = [], error } = useRequest('/api/services_juridicos/personanatural');
  const titlesection="Objetivos Institucionales"
  const actualizacioninfo= "14/04/2023"
  const descriptionsection="El Municipio de Vinto tiene la visión de ser un territorio planificado, protector de su patrimonio productivo e identidad natural y cultural con servicios básicos e infraestructura de calidad, que garantiza el desarrollo integral de cada uno de sus habitantes con enfoque de género y generacional, en correspondencia con los principios de la Madre Tierra para Vivir Bien."
  if (error) {
    return <ErrorScreen />;
  }
console.log(jobs)
  return (
    <Page title="Objetivos Institucionales">
     <InstituciónSectionTwo titlesection={titlesection} actualizacioninfo={actualizacioninfo} descriptionsection={descriptionsection}/>

      {/*<CareerLandingFeaturedJobs jobs={jobs.slice(-6)} />*/}

      {/*<CareerLandingTopCompanies companies={_jobsByCompanies} />*/}

      {/*<CareerLandingHotCategories categories={_jobsByCategories} />*/}

      {/*<CareerLangdingConnections countries={_jobsByCountries} />*/}

      {/*<CareerLangdingForRecruiters />*/}

      {/*<TestimonialsCareer testimonials={_testimonials} />*/}

      {/*<OurClientsCareer brands={_brandsColor} />*/}

      {/*<BlogCareerLatestPosts posts={posts.slice(0, 5)} />*/}

      {/* <DownloadAppCareer />*/}

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
