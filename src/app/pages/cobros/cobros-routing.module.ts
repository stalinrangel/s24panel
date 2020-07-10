import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CobrosVerComponent } from './cobros-ver.component';

const routes: Routes = [{
  path: '',
  component: CobrosVerComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class cobrosRoutingModule {

}

export const routedComponents = [
  CobrosVerComponent,
];
