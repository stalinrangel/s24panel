import { NbMenuItem } from '@nebular/theme';

/*
MENU_ITEMS0
MENU_ITEMS1
MENU_ITEMS5
MENU_ITEMS6
MENU_ITEMS7
*/
export const MENU_ITEMS0: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion-home',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'Pedidos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Por aceptar',
        link: '/pages/pedidos/aceptar',
      },    
      {
        title: 'En curso',
        link: '/pages/pedidos/encurso',
      },
      {
        title: 'Finalizados',
        link: '/pages/pedidos/finalizados',
      },
      {
        title: 'Cancelados',
        link: '/pages/pedidos/cancelados',
      },
      
    ],
  },
  /*{
    title: 'Login',
    icon: 'nb-locked',
    link: '/pagessinples/loginf',
    home: true,
  },*/
  {
    title: 'Clientes',
    icon: 'ion-ios-people-outline',
    children: [
      /*{
        title: 'Crear Clientes',
        link: '/pages/clientes/crear',
      },*/
      {
        title: 'Ver Clientes',
        link: '/pages/clientes/ver',
      },
    ],
  },
  {
    title: 'Servicios',
    icon: 'ion-ios-box-outline',
    children: [
      /*{
        title: 'Agregar Servicios',
        link: '/pages/productos/agregar',
      },*/
      {
        title: 'Ver Servicios',
        link: '/pages/productos/ver',
      },
      {
        title: 'Servicios Editados',
        link: '/pages/productos/editados',
      },
     
    ],
  },
  /*{
    title: 'Establecimientos',
    icon: 'nb-home',
    children: [
      {
        title: 'Agregar Establecimientos',
        link: '/pages/establecimientos/agregar',
      },
      {
        title: 'Ver Establecimientos',
        link: '/pages/establecimientos/ver',
      },
     
    ],
  },*/
  {
    title: 'Proveedores',
    icon: 'ion-android-bicycle',
    children: [
     /* {
        title: 'Agregar Proveedores',
        link: '/pages/socios/agregar',
      },*/
      {
        title: 'Ver Proveedores',
        link: '/pages/socios/ver',
      },
      {
        title: 'Por registar',
        link: '/pages/socios/registrar',
      },
      {
        title: 'Reporte Excel',
        link: '/pages/socios/reporte',
      }
    ],
  },
  {
    title: 'Chat',
    icon: 'nb-email',
    link: '/pages/chat-box',
    home: true,
  },
  {
    title: 'Notificaciones',
    icon: 'nb-notifications',
    link: '/pages/notificaciones',
    home: true,
  },
  {
    title: 'Cobros',
    icon: 'ion-social-usd',
    children: [
      {
        title: 'Crear recibo',
        link: '/pages/cobro/crear',
      },
      {
        title: 'Por Pagar',
        link: '/pages/cobro/ver',
      },
      {
        title: 'Pagados',
        link: '/pages/cobro/agregar',
      }
    ],
  },
  {
    title: 'Sistema',
    icon: 'nb-edit',
    children: [
      {
        title: 'Planes',
        link: '/pages/planes',
      },
      {
        title: 'Contacto',
        link: '/pages/contacto',
      },
    ],
  },
  {
    title: 'Zonas',
    icon: 'nb-location',
    children: [
      {
        title: 'Paises',
        link: '/pages/zonas/pais',
      },
      {
        title: 'Ciudades',
        link: '/pages/zonas/ciudades',
      },
      {
        title: 'Ver Zonas',
        link: '/pages/zonas/todas',
      },
      {
        title: 'Agregar Zona',
        link: '/pages/zonas/agregar',
      },
      {
        title: 'Editar Zonas',
        link: '/pages/zonas/ver',
      },
     
    ],
  },
  {
    title: 'Categorias principales',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Principales',
        link: '/pages/categoriasPrincipales/agregar',
      },
      {
        title: 'Ver Principales',
        link: '/pages/categoriasPrincipales/ver',
      },
     
    ],
  },
  {
    title: 'Categorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Categorías',
        link: '/pages/categorias/agregar',
      },
      {
        title: 'Ver Categorías',
        link: '/pages/categorias/ver',
      },
     
    ],
  },
  {
    title: 'Subcategorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Subcategorías',
        link: '/pages/subcategorias/agregar',
      },
      {
        title: 'Ver Subcategorías',
        link: '/pages/subcategorias/ver',
      },
     
    ],
  },
  /*
  {
    title: 'Sistema',
    icon: 'ion-wrench',
    link: '/pages/sistema',
    home: true,
  },


  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },

  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
export const MENU_ITEMS1: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion-home',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'Pedidos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Por aceptar',
        link: '/pages/pedidos/aceptar',
      },    
      {
        title: 'En curso',
        link: '/pages/pedidos/encurso',
      },
      {
        title: 'Finalizados',
        link: '/pages/pedidos/finalizados',
      },
      {
        title: 'Cancelados',
        link: '/pages/pedidos/cancelados',
      },
      
    ],
  },
  {
    title: 'Usuarios',
    icon: 'ion-ios-people-outline',
    children: [
      {
        title: 'Ver Usuarios',
        link: '/pages/clientes/ver',
      },
    ],
  },
  {
    title: 'Servicios',
    icon: 'ion-ios-box-outline',
    children: [

      {
        title: 'Ver Servicios',
        link: '/pages/productos/ver',
      },
      {
        title: 'Servicios Editados',
        link: '/pages/productos/editados',
      },
     
    ],
  },
  {
    title: 'Proveedores',
    icon: 'ion-android-bicycle',
    children: [
      {
        title: 'Ver Proveedores',
        link: '/pages/socios/ver',
      },
      {
        title: 'Por registar',
        link: '/pages/socios/registrar',
      },
      {
        title: 'Reporte Excel',
        link: '/pages/socios/reporte',
      }
    ],
  },
  {
    title: 'Cobros',
    icon: 'ion-social-usd',
    children: [
      {
        title: 'Crear recibo',
        link: '/pages/cobro/crear',
      },
      {
        title: 'Por Pagar',
        link: '/pages/cobro/ver',
      },
      {
        title: 'Pagados',
        link: '/pages/cobro/agregar',
      }
    ],
  },
  {
    title: 'Chat',
    icon: 'nb-email',
    link: '/pages/chat-box',
    home: true,
  },
  {
    title: 'Notificaciones',
    icon: 'nb-notifications',
    link: '/pages/notificaciones',
    home: true,
  },
  {
    title: 'Sistema',
    icon: 'nb-edit',
    children: [
      {
        title: 'Planes',
        link: '/pages/planes',
      },
      {
        title: 'Contacto',
        link: '/pages/contacto',
      },
    ],
  },
  {
    title: 'Zonas',
    icon: 'nb-location',
    children: [
      {
        title: 'Ciudades',
        link: '/pages/zonas/ciudades',
      },
      {
        title: 'Agregar Zona',
        link: '/pages/zonas/agregar',
      },
      {
        title: 'Editar Zonas',
        link: '/pages/zonas/ver',
      },
     
    ],
  },
  {
    title: 'Categorias principales',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Principales',
        link: '/pages/categoriasPrincipales/agregar',
      },
      {
        title: 'Ver Principales',
        link: '/pages/categoriasPrincipales/ver',
      },
     
    ],
  },
  {
    title: 'Categorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Categorías',
        link: '/pages/categorias/agregar',
      },
      {
        title: 'Ver Categorías',
        link: '/pages/categorias/ver',
      },
     
    ],
  },
  {
    title: 'Subcategorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Subcategorías',
        link: '/pages/subcategorias/agregar',
      },
      {
        title: 'Ver Subcategorías',
        link: '/pages/subcategorias/ver',
      },
     
    ],
  },
];

export const MENU_ITEMS5: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion-home',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'Pedidos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Por aceptar',
        link: '/pages/pedidos/aceptar',
      },    
      {
        title: 'En curso',
        link: '/pages/pedidos/encurso',
      },
      {
        title: 'Finalizados',
        link: '/pages/pedidos/finalizados',
      },
      {
        title: 'Cancelados',
        link: '/pages/pedidos/cancelados',
      },
      
    ],
  },
  {
    title: 'Usuarios',
    icon: 'ion-ios-people-outline',
    children: [
      {
        title: 'Ver Usuarios',
        link: '/pages/clientes/ver',
      },
    ],
  },
  {
    title: 'Servicios',
    icon: 'ion-ios-box-outline',
    children: [

      {
        title: 'Ver Servicios',
        link: '/pages/productos/ver',
      },
      {
        title: 'Servicios Editados',
        link: '/pages/productos/editados',
      },
     
    ],
  },
  {
    title: 'Proveedores',
    icon: 'ion-android-bicycle',
    children: [
      {
        title: 'Ver Proveedores',
        link: '/pages/socios/ver',
      },
      {
        title: 'Por registar',
        link: '/pages/socios/registrar',
      },
      {
        title: 'Reporte Excel',
        link: '/pages/socios/reporte',
      }
    ],
  },
  {
    title: 'Cobros',
    icon: 'ion-social-usd',
    children: [
      {
        title: 'Crear recibo',
        link: '/pages/cobro/crear',
      },
      {
        title: 'Por Pagar',
        link: '/pages/cobro/ver',
      },
      {
        title: 'Pagados',
        link: '/pages/cobro/agregar',
      }
    ],
  },
  {
    title: 'Chat',
    icon: 'nb-email',
    link: '/pages/chat-box',
    home: true,
  },
  {
    title: 'Notificaciones',
    icon: 'nb-notifications',
    link: '/pages/notificaciones',
    home: true,
  },
  {
    title: 'Zonas',
    icon: 'nb-location',
    children: [
      {
        title: 'Ciudades',
        link: '/pages/zonas/ciudades',
      },
      {
        title: 'Agregar Zona',
        link: '/pages/zonas/agregar',
      },
      {
        title: 'Editar Zonas',
        link: '/pages/zonas/ver',
      },
     
    ],
  },
  {
    title: 'Categorias principales',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Principales',
        link: '/pages/categoriasPrincipales/agregar',
      },
      {
        title: 'Ver Principales',
        link: '/pages/categoriasPrincipales/ver',
      },
     
    ],
  },
  {
    title: 'Categorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Categorías',
        link: '/pages/categorias/agregar',
      },
      {
        title: 'Ver Categorías',
        link: '/pages/categorias/ver',
      },
     
    ],
  },
  {
    title: 'Subcategorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Subcategorías',
        link: '/pages/subcategorias/agregar',
      },
      {
        title: 'Ver Subcategorías',
        link: '/pages/subcategorias/ver',
      },
     
    ],
  },
];

export const MENU_ITEMS6: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion-home',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'Pedidos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Por aceptar',
        link: '/pages/pedidos/aceptar',
      },    
      {
        title: 'En curso',
        link: '/pages/pedidos/encurso',
      },
      {
        title: 'Finalizados',
        link: '/pages/pedidos/finalizados',
      },
      {
        title: 'Cancelados',
        link: '/pages/pedidos/cancelados',
      },
      
    ],
  },
  {
    title: 'Usuarios',
    icon: 'ion-ios-people-outline',
    children: [
      {
        title: 'Ver Usuarios',
        link: '/pages/clientes/ver',
      },
    ],
  },
  {
    title: 'Servicios',
    icon: 'ion-ios-box-outline',
    children: [

      {
        title: 'Ver Servicios',
        link: '/pages/productos/ver',
      },
      {
        title: 'Servicios Editados',
        link: '/pages/productos/editados',
      },
     
    ],
  },
  {
    title: 'Proveedores',
    icon: 'ion-android-bicycle',
    children: [
      {
        title: 'Ver Proveedores',
        link: '/pages/socios/ver',
      },
      {
        title: 'Por registar',
        link: '/pages/socios/registrar',
      },
      {
        title: 'Reporte Excel',
        link: '/pages/socios/reporte',
      }
    ],
  },
  {
    title: 'Cobros',
    icon: 'ion-social-usd',
    children: [
      {
        title: 'Crear recibo',
        link: '/pages/cobro/crear',
      },
      {
        title: 'Por Pagar',
        link: '/pages/cobro/ver',
      },
      {
        title: 'Pagados',
        link: '/pages/cobro/agregar',
      }
    ],
  },
  {
    title: 'Chat',
    icon: 'nb-email',
    link: '/pages/chat-box',
    home: true,
  },
  {
    title: 'Notificaciones',
    icon: 'nb-notifications',
    link: '/pages/notificaciones',
    home: true,
  },
  {
    title: 'Zonas',
    icon: 'nb-location',
    children: [
      {
        title: 'Ciudades',
        link: '/pages/zonas/ciudades',
      },
      {
        title: 'Agregar Zona',
        link: '/pages/zonas/agregar',
      },
      {
        title: 'Editar Zonas',
        link: '/pages/zonas/ver',
      },
     
    ],
  },
  {
    title: 'Categorias principales',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Principales',
        link: '/pages/categoriasPrincipales/agregar',
      },
      {
        title: 'Ver Principales',
        link: '/pages/categoriasPrincipales/ver',
      },
     
    ],
  },
  {
    title: 'Categorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Categorías',
        link: '/pages/categorias/agregar',
      },
      {
        title: 'Ver Categorías',
        link: '/pages/categorias/ver',
      },
     
    ],
  },
  {
    title: 'Subcategorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Subcategorías',
        link: '/pages/subcategorias/agregar',
      },
      {
        title: 'Ver Subcategorías',
        link: '/pages/subcategorias/ver',
      },
     
    ],
  },
];

export const MENU_ITEMS7: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion-home',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'Pedidos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Por aceptar',
        link: '/pages/pedidos/aceptar',
      },    
      {
        title: 'En curso',
        link: '/pages/pedidos/encurso',
      },
      {
        title: 'Finalizados',
        link: '/pages/pedidos/finalizados',
      },
      {
        title: 'Cancelados',
        link: '/pages/pedidos/cancelados',
      },
      
    ],
  },
  {
    title: 'Usuarios',
    icon: 'ion-ios-people-outline',
    children: [
      {
        title: 'Ver Usuarios',
        link: '/pages/clientes/ver',
      },
    ],
  },
  {
    title: 'Servicios',
    icon: 'ion-ios-box-outline',
    children: [

      {
        title: 'Ver Servicios',
        link: '/pages/productos/ver',
      },
      {
        title: 'Servicios Editados',
        link: '/pages/productos/editados',
      },
     
    ],
  },
  {
    title: 'Proveedores',
    icon: 'ion-android-bicycle',
    children: [
      {
        title: 'Ver Proveedores',
        link: '/pages/socios/ver',
      },
      {
        title: 'Por registar',
        link: '/pages/socios/registrar',
      },
      {
        title: 'Reporte Excel',
        link: '/pages/socios/reporte',
      }
    ],
  },
  {
    title: 'Cobros',
    icon: 'ion-social-usd',
    children: [
      {
        title: 'Crear recibo',
        link: '/pages/cobro/crear',
      },
      {
        title: 'Por Pagar',
        link: '/pages/cobro/ver',
      },
      {
        title: 'Pagados',
        link: '/pages/cobro/agregar',
      }
    ],
  },
  {
    title: 'Chat',
    icon: 'nb-email',
    link: '/pages/chat-box',
    home: true,
  },
  {
    title: 'Notificaciones',
    icon: 'nb-notifications',
    link: '/pages/notificaciones',
    home: true,
  },
  {
    title: 'Zonas',
    icon: 'nb-location',
    children: [
      {
        title: 'Agregar Zona',
        link: '/pages/zonas/agregar',
      },
      {
        title: 'Editar Zonas',
        link: '/pages/zonas/ver',
      },
     
    ],
  },
  {
    title: 'Categorias principales',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Principales',
        link: '/pages/categoriasPrincipales/agregar',
      },
      {
        title: 'Ver Principales',
        link: '/pages/categoriasPrincipales/ver',
      },
     
    ],
  },
  {
    title: 'Categorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Categorías',
        link: '/pages/categorias/agregar',
      },
      {
        title: 'Ver Categorías',
        link: '/pages/categorias/ver',
      },
     
    ],
  },
  {
    title: 'Subcategorías',
    icon: 'nb-gear',
    children: [
      {
        title: 'Agregar Subcategorías',
        link: '/pages/subcategorias/agregar',
      },
      {
        title: 'Ver Subcategorías',
        link: '/pages/subcategorias/ver',
      },
     
    ],
  },
];


