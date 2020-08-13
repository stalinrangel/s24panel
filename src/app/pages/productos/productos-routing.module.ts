import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ProductosVerComponent } from './productos-ver/productos-ver.component';
import { ProductosVerEditadosComponent } from './productos-ver-editados/productos-ver-editados.component';
import { ProductosVerOnComponent } from './productos-ver-on/productos-ver-on.component';
import { ProductosVerOffComponent } from './productos-ver-off/productos-ver-off.component';
import { ProductosAgregarComponent } from './productos-agregar/productos-agregar.component';

const routes: Routes = [{
  path: '',
  component: ProductosComponent,
  children: [{
    path: 'ver',
    component: ProductosVerComponent,
  },{
    path: 'editados',
    component: ProductosVerEditadosComponent,
  },{
    path: 'on',
    component: ProductosVerOnComponent,
  },{
    path: 'off',
    component: ProductosVerOffComponent,
  },{
    path: 'agregar',
    component: ProductosAgregarComponent,
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
export class ProductosRoutingModule {

}

export const routedComponents = [
  ProductosComponent,
  ProductosVerComponent,
  ProductosVerEditadosComponent,
  ProductosVerOnComponent,
  ProductosVerOffComponent,
  ProductosAgregarComponent,
];
