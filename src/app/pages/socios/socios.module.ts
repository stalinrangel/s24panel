import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { SociosRoutingModule, routedComponents } from './socios-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';

//Mis imports
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { ToasterModule } from 'angular2-toaster';
//import { Ng2UploaderModule } from 'ng2-uploader';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    //Ng2UploaderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAu3ISPnP2ypZSaIS8s93TR71lnyZoQWNY',
      libraries: ["places"]
    }),
    ToasterModule,
    ThemeModule,
    SociosRoutingModule,
    Ng2SmartTableModule,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.chasingDots,
        backdropBackgroundColour: 'rgba(0,0,0,0.5)', 
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff',
        fullScreenBackdrop: true
    })
  ],
  declarations: [
    ...routedComponents,
  ],
   providers: [
    SmartTableService,
  ],
})
export class SociosModule { }
