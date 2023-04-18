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
  InstituciónSectionOne,
} from '../../../src/sections/@career';
import { MarketingFreeSEO } from '../../../src/sections/@marketing';

// ----------------------------------------------------------------------

personanatural.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function personanatural({ posts }) {
  const { data: jobs = [], error } = useRequest('/api/career/jobs');
  const titlesection="Gaceta Municipal/Normativa"
  const actualizacioninfo= "14/04/2023"
  const descriptionsection="Publicamos nuestras leyes vigentes"
  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Gaceta Municipal/Normativa">
      <InstituciónSectionOne titlesection={titlesection} actualizacioninfo={actualizacioninfo} descriptionsection={descriptionsection}/>

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
