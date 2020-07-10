import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { notificacionesComponent } from './notificaciones.component';

const routes: Routes = [{
  path: '',
  component: notificacionesComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class notificacionesRoutingModule {

}

export const routedComponents = [
  notificacionesComponent,
];
