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
  InstituciónSection,
  InstituciónSectionOne,
} from '../../../src/sections/@career';
import { MarketingFreeSEO } from '../../../src/sections/@marketing';

// ----------------------------------------------------------------------

personanatural.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function personanatural({ posts }) {
  const { data: jobs = [], error } = useRequest('/api/services_juridicos/personanatural');
  const titlesection="Misión"
  const actualizacioninfo= "14/04/2023"
  const descriptionsection="El Gobierno Autónomo Municipal de Totora, asume la misión de perfeccionar su Autonomía Municipal, promover y garantizar el Desarrollo Ecológico Integral del Municipio; Impulsar el Desarrollo Económico Municipal; Promover el Desarrollo Humano Integral; Preservar, conservar y contribuir a la protección de la Madre Tierra y los Ecosistemas; Garantizar una gestión municipal transparente; Promover y contribuir a respeto de la propiedad privada urbana y rural, en beneficio de los habitantes mujeres, hombres, niñas, niños, adolescentes, adultos mayores y personas discapacitadas de la jurisdicción municipal de Vinto."
  const notDocument=false;

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Misión">
      

      <InstituciónSectionOne titlesection={titlesection} notDocument={notDocument} actualizacioninfo={actualizacioninfo} descriptionsection={descriptionsection}/>

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
