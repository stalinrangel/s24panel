import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { contactoComponent } from './contacto.component';

const routes: Routes = [{
  path: '',
  component: contactoComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class contactoRoutingModule {

}

export const routedComponents = [
  contactoComponent,
];
