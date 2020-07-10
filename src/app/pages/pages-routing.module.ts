import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiDashboardComponent } from './mi-dashboard/mi-dashboard.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
   {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  },{
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  },{
    path: 'socios',
    loadChildren: './socios/socios.module#SociosModule',
  },{
    path: 'cobro',
    loadChildren: './cobro/cobro.module#CobroModule',
  },{
    path: 'clientes',
    loadChildren: './clientes/clientes.module#ClientesModule',
  },{
    path: 'categorias',
    loadChildren: './categorias/categorias.module#CategoriasModule',
  },{
    path: 'categoriasPrincipales',
    loadChildren: './catprincipales/catprincipales.module#CatprincipalesModule',
  },{
    path: 'subcategorias',
    loadChildren: './subcategorias/subcategorias.module#SubcategoriasModule',
  },{
    path: 'productos',
    loadChildren: './productos/productos.module#ProductosModule',
  },{
    path: 'establecimientos',
    loadChildren: './establecimientos/establecimientos.module#EstablecimientosModule',
  },{
    path: 'pedidos',
    loadChildren: './pedidos/pedidos.module#PedidosModule',
  },{
    path: 'chat-box',
    loadChildren: './chat-box/chat-box.module#ChatBoxModule',
  },{
    path: 'blogs',
    loadChildren: './blogs/blogs.module#BlogsModule',
  },{
    path: 'notificaciones',
    loadChildren: './notificaciones/notificaciones.module#notificacionesModule',
  },{
    path: 'planes',
    loadChildren: './planes/planes.module#planesModule',
  },{
    path: 'contacto',
    loadChildren: './contacto/contacto.module#contactoModule',
  },{
    path: 'cobros',
    loadChildren: './cobros/cobros.module#cobrosModule',
  },{
    path: 'zonas',
    loadChildren: './super-ciudades/super-ciudades.module#SuperCiudadesModule',
  },{
    path: 'sistema',
    loadChildren: './sistema/sistema.module#SistemaModule',
  },{
    path: 'pagos',
    loadChildren: './pagos/pagos.module#PagosModule',
  },

  {
    path: 'mi/dashboard',
    component: MiDashboardComponent,
  },{
    path: 'mis/productos',
    loadChildren: './mis-productos/mis-productos.module#MisProductosModule',
  },{
    path: 'mis/pedidos',
    loadChildren: './mis-pedidos/mis-pedidos.module#MisPedidosModule',
  },{
    path: 'mis/pagos',
    loadChildren: './mis-pagos/mis-pagos.module#MisPagosModule',
  },{
    path: 'ordenar',
    loadChildren: './ordenar/ordenar.module#OrdenarModule',
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
