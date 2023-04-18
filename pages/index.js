// _data
import { _jobsByCompanies, _pricingHome } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import { PricingHome } from '../src/sections/pricing';
import {
  HomeHero,
  // HomeFAQs,
  HomeNewStart,
  // HomeDemoPages,
  HomeMunicipio,
  HomeCombination,
  HomeAdvertisement,
  HomeFeatureHighlights,
  HomeFlexibleComponents,
  HomeObras,
  HomeAtractivosTuristicos,
  HomeDemoPages,
  HomeForDesigner,
} from '../src/sections/home';
import Wp from "../src/assets/wp.jpg"
import { NewsletterCareer } from '../src/sections/newsletter';
import { CareerLandingTopCompanies, CareerLangdingForRecruiters } from '../src/sections/@career';
import { MarketingFreeSEO } from '../src/sections/@marketing';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Inicio de Totora">
       <HomeHero />
     
      <HomeNewStart />
     
      <HomeMunicipio />
      <HomeObras />
      <HomeAtractivosTuristicos />
      <CareerLangdingForRecruiters />
      
      <CareerLandingTopCompanies companies={_jobsByCompanies} />
      <MarketingFreeSEO />
   

    </Page>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
