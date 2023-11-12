import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MiDashboardModule } from './mi-dashboard/mi-dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
//import { PublicidadComponent } from './publicidad/publicidad.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiDashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
   // PublicidadComponent
  ],
})
export class PagesModule {
}
