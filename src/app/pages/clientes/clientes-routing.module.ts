import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { ClientesVerComponent } from './clientes-ver/clientes-ver.component';
import { ClientesCrearComponent } from './clientes-crear/clientes-crear.component';

const routes: Routes = [{
  path: '',
  component: ClientesComponent,
  children: [{
    path: 'ver',
    component: ClientesVerComponent,
  },{
    path: 'crear',
    component: ClientesCrearComponent,
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
export class ClientesRoutingModule {

}

export const routedComponents = [
  ClientesComponent,
  ClientesVerComponent,
  ClientesCrearComponent,
];
