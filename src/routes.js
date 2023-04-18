// ----------------------------------------------------------------------
//Routes.transparencia.transparencia
const Routes = {
  transparencia: {
    landing: '/transparencia/',
    rendicion_publica: '/transparencia/rendicion_publica',
    auditoria: '/transparencia/auditoria',
    formularios: '/transparencia/formularios',

    prevencion_transparencia: '/transparencia/prevencion_transparencia',
    lucha_contracorrupcion: '/transparencia/lucha_contracorrupcion',
    contacto_responsable: '/transparencia/contacto_responsable',


  },
  gestion_municipal: {
    planificacion_financiera: '/gestion_municipal/planificacion_financiera',
    reglamentos_manuales: '/gestion_municipal/reglamentos_manuales',
    recursos_humanos: '/gestion_municipal/recursos_humanos',

  },
  // Travel
  services_tramites: {
    guia_tramites: '/services_tramites/guia_tramites',
    servicios: '/services_tramites/servicios',

  },

  // institucion
  institucion: {

    fundacion: "/institucion/fundacion",
    mision: "/institucion/mision",
    vision: "/institucion/vision",
    objetivos_institucionales: "/institucion/objetivos_institucionales",
    autoridades_organizacion: "/institucion/autoridades_organizacion",
    organigrama: '/institucion/organigrama',
    gaceta_municipal: '/institucion/gaceta_municipal',

  },
  informacion_interes: {

    noticias: "/informacion_interes/noticias",
    eventos: "/informacion_interes/eventos",
    informacion_estadistica: "/informacion_interes/informacion_estadistica",
    banco_trabajo_investigacion: "/informacion_interes/banco_trabajo_investigacion",
    medios_comunicacion: "/informacion_interes/medios_comunicacion",
    enlaces: '/informacion_interes/enlaces',
  },
  programas_proyectos: {

    actividad_economica: "/programas_proyectos/actividad_economica",
    obras: "/programas_proyectos/obras",
    programas: "/programas_proyectos/programas",

  },
  contacto: {
    comentarios: "/contacto/comentarios",
    directorios: "/contacto/directorios"
  },
  // E-Learning
  eLearning: {
    landing: '/e-learning',
    courses: '/e-learning/courses',
    course: (id) => `/e-learning/courses/${id}`,
    posts: '/e-learning/blog',
    post: (slug) => `/e-learning/blog/${slug}`,
    about: '/e-learning/about-us',
    contact: '/e-learning/contact-us',
  },
  // Common
  loginCover: '/auth/login-cover',
  registerCover: '/auth/register-cover',
  loginIllustration: '/auth/login-illustration',
  registerIllustration: '/auth/register-illustration',
  resetPassword: '/auth/reset-password',
  verifyCode: '/auth/verify-code',
  maintenance: '/maintenance',
  comingsoon: '/coming-soon',
  pricing01: '/pricing-01',
  pricing02: '/pricing-02',
  checkout: '/checkout',
  support: '/support',
  page404: '/404',
  page500: '/500',
  // Others
  pages: '/pages',
  componentsUI: '/components-ui',
  componentUI: (slug) => `/components-ui/${slug}`,
  muiComponents: 'https://mui.com/components',
  docs: 'https://zone-docs.vercel.app',
  license: 'https://material-ui.com/store/license/#i-standard-license',
  minimalDashboard: 'https://material-ui.com/store/items/minimal-dashboard',
  buyNow: 'https://material-ui.com/store/items/zone-landing-page',
  figmaPreview:
    'https://www.figma.com/file/iAnp6x4J6YNvbVzdBnGM8P/%5BPreview%5D-Zone-Web?node-id=0%3A1',
};

export default Routes;
