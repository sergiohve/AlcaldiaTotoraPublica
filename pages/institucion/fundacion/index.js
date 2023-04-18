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

CareerLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function CareerLandingPage({ posts }) {
  const { data: jobs = [], error } = useRequest('/api/career/jobs');
  const titlesection = "Fundación"
  const actualizacioninfo= "04/04/2023"
  const descriptionsection = "La Unidad Territorial (Municipio) de Totora, fue creado mediante Ley de 28 de diciembre de 1944, durante la Presidencia de TCNL. Gualberto Villarroel. El Artículo Único de la referida ley menciona lo siguientes:   “Erígese en cantón el villorrio Vinto de la Sección Municipal de Quillacollo del Departamento de Cochabamba, con los siguientes límites jurisdiccionales: al Norte con el Cantón Anocaraire; al Sud con Caramarca y la sección de Sipe Sipe; al Este con el Cercado y al Oeste con la comarca de Mallco Rancho. Posteriormente, el Presidente Constitucional de la Republica Dr. Victor Paz Estensoro promulga la Ley Nº 59 de 23 de diciembre de 1960, que en su texto original menciona lo siguiente: “Artículo 1°.- Se crea en la provincia Quillacollo, del departamento de Cochabamba, la 4º Sección Municipal, cuya capital será la población de Vinto. Artículo 2°.- La nueva sección municipal estará formada por las siguientes poblaciones: Mallo- Rancho , Chaupisuyo, Huanña- Cahua, Mallco- Chapi, Payacollo, Huancarani, Igmani, Caltancani, Llave, Collpa y Cotani; quedando elevados a rango de cantones las poblaciones de Mallco- Rancho, la Chulla y Machac Marca. Posteriormente la Ley de 23 de diciembre de 1.960, creó la cuarta sección sobre la base del cantón Vinto que formaba parte de la primera sección, asimismo esta disposición elevó al rango de cantón a las localidades de: Mallco Rancho, la Chulla y Machajmarca. Esta Ley fue modificada mediante Ley de 28 de noviembre de 1.962, misma que reintegra el cantón Mallco Rancho a la segunda sección con capital Sipe Sipe, ratificando como cantones a la Chulla y Machajmarca en la cuarta sección con capital Vinto."
  const image="https://www.gamvinto.gob.bo/uploads/pagina/creacion-de-vint_43914aed0219a05.jpeg"
  const notDocument=true;
  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Fundación">
      <InstituciónSectionOne titlesection={titlesection} notDocument={notDocument} image={image} actualizacioninfo={actualizacioninfo} descriptionsection={descriptionsection} />

      <MarketingFreeSEO />
    </Page>
  );
}

// ----------------------------------------------------------------------

CareerLandingPage.getLayout = function getLayout(page) {
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
