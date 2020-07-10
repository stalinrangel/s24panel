import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { planesComponent } from './planes.component';

const routes: Routes = [{
  path: '',
  component: planesComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class planesRoutingModule {

}

export const routedComponents = [
  planesComponent,
];
