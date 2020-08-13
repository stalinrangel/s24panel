import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SociosComponent } from './socios.component';
import { SociosAgregarComponent } from './socios-agregar/socios-agregar.component';
import { SociosVerComponent } from './socios-ver/socios-ver.component';
import { SociosReporteComponent } from './socios-reporte/socios-reporte.component';
import { registrarComponent } from './registrar/registrar.component';
import { inactivosComponent } from './inactivos/inactivos.component';
import { activosComponent } from './activos/activos.component';
import { SociosIncompletosComponent } from './socios-incompletos/socios-incompletos.component';

const routes: Routes = [{
  path: '',
  component: SociosComponent,
  children: [{
    path: 'agregar',
    component: SociosAgregarComponent,
  },{
    path: 'ver',
    component: SociosVerComponent,
  },{
    path: 'activos',
    component: activosComponent,
  },{
    path: 'inactivos',
    component: inactivosComponent,
  },{
    path: 'registrar',
    component: registrarComponent,
  },{
    path: 'reporte',
    component: SociosReporteComponent,
  },{
    path: 'incompletos',
    component: SociosIncompletosComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SociosRoutingModule {

}

export const routedComponents = [
  SociosComponent,
  SociosAgregarComponent,
  SociosVerComponent,
  SociosReporteComponent,
  registrarComponent,
  SociosIncompletosComponent,
  inactivosComponent,
  activosComponent
];
