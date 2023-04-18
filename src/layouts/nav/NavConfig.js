// routes
import Routes from '../../routes';
// _data
import { _tours, _jobs, _courses } from '../../../_data/mock';

// ----------------------------------------------------------------------
export const PageInstitucion = [

  {
    order: '1',
    subheader: 'Institución',
    items: [
      { title: 'Fundación', path: Routes.institucion.fundacion },
      { title: 'Misión', path: Routes.institucion.mision },
      { title: 'Visión', path: Routes.institucion.vision },
      { title: 'Objetivos Institucionales', path: Routes.institucion.objetivos_institucionales },
      { title: 'Autoridades y su Organización', path: Routes.institucion.autoridades_organizacion },
      { title: 'Organigrama', path: Routes.institucion.organigrama },
      { title: 'Gaceta Municipal/Normativa', path: Routes.institucion.gaceta_municipal },

    ],
  }


];
export const PageServiciosTramites= [

  {
    order: '2',
    subheader: 'Servicios y Trámites',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Guias de Trámites', path: Routes.services_tramites.guia_tramites },
      { title: 'Servicios', path: Routes.services_tramites.servicios },
      

    ],
  }

];
export const PageLinks = [

  {
    order: '3',
    subheader: 'Transparencia',
    cover: '',
    items: [
      { title: 'Rendición pública de cuentas', path: Routes.transparencia.rendicion_publica },
      { title: 'Formularios', path: Routes.transparencia.formularios },
      { title: 'Prevención y transparencia', path: Routes.transparencia.prevencion_transparencia },
      { title: 'Lucha contra la corrupción', path: Routes.transparencia.lucha_contracorrupcion },
      { title: 'Contacto del responsable', path: Routes.transparencia.contacto_responsable },

    ],
  }
];



export const Pageblogs = [


  {
    order: '4',
    subheader: 'Gestión municipal',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Planificación e información financiera', path: Routes.gestion_municipal.planificacion_financiera },
      { title: 'Reglamentos y Manuales', path: Routes.gestion_municipal.reglamentos_manuales },
      { title: 'Recursos humanos', path: Routes.gestion_municipal.recursos_humanos },
      


    ],
  }

];
export const PageInformacionInteres = [


  {
    order: '5',
    subheader: 'Información de interés',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Noticias', path: Routes.informacion_interes.noticias },
      { title: 'Eventos', path: Routes.informacion_interes.eventos },
      { title: 'Enlaces', path: Routes.informacion_interes.enlaces },


    ],
  }

];
export const PageProgramasProyectos = [


  {
    order: '6',
    subheader: 'Programas y proyectos',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Actividad económica', path: Routes.programas_proyectos.actividad_economica },
      { title: 'Obras', path: Routes.programas_proyectos.obras },
    


    ],
  }

];
export const PageContacto = [


  {
    order: '7',
    subheader: 'Contacto',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Comentarios y Sugerencias', path: Routes.contacto.comentarios },
      { title: 'Directorio telefónico y Direcciones', path: Routes.contacto.directorios }
    ],
  }

];


export const navConfig = [
  { title: 'Inicio', path: '/' },
  { title: 'Institución', path: Routes.institucion, children: [PageInstitucion[0]] },
  { title: 'Servicios y Trámites', path: Routes.componentsUI, children: [PageServiciosTramites[0]] },
  {
    title: 'Transparencia',
    path: Routes.transparencia,
    children: [PageLinks[0]],
  },
  { title: 'Gestión municipal', path: Routes.docs, children: [Pageblogs[0]] },
  { title: 'Información de interés', path: Routes.docs, children: [PageInformacionInteres[0]] },
  { title: 'Programas y proyectos', path: Routes.docs, children: [PageProgramasProyectos[0]] },
  { title: 'Contacto', path: Routes.docs, children: [PageContacto[0]] },
];
