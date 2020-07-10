import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos.component';
import { PedidosAceptarComponent } from './pedidos-aceptar/pedidos-aceptar.component';
import { PedidosCursoComponent } from './pedidos-curso/pedidos-curso.component';
import { PedidosFinalizadosComponent } from './pedidos-finalizados/pedidos-finalizados.component';
import { PedidosCanceladosComponent } from './pedidos-cancelados/pedidos-cancelados.component';

const routes: Routes = [{
  path: '',
  component: PedidosComponent,
  children: [{
    path: 'aceptar',
    component: PedidosAceptarComponent,
  },{
    path: 'encurso',
    component: PedidosCursoComponent,
  },{
    path: 'finalizados',
    component: PedidosFinalizadosComponent,
  },{
    path: 'cancelados',
    component: PedidosCanceladosComponent,
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
export class PedidosRoutingModule {

}

export const routedComponents = [
  PedidosComponent,
  PedidosAceptarComponent,
  PedidosCursoComponent,
  PedidosFinalizadosComponent,
  PedidosCanceladosComponent
];
