import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobroComponent } from './cobro.component';
import { CobroAgregarComponent } from './cobro/cobro-agregar.component';
import { CobroVerComponent } from './cobro-ver/cobro-ver.component';
import { CobroCrearComponent } from './cobro-crear/cobro-crear.component';

const routes: Routes = [{
  path: '',
  component: CobroComponent,
  children: [{
    path: 'agregar',
    component: CobroAgregarComponent,
  },{
    path: 'ver',
    component: CobroVerComponent,
  },{
    path: 'crear',
    component: CobroCrearComponent,
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
export class CobroRoutingModule {

}

export const routedComponents = [
  CobroComponent,
  CobroAgregarComponent,
  CobroVerComponent,
  CobroCrearComponent
];
