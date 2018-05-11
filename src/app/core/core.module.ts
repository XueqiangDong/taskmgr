import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HttpModule} from '@angular/http';
import {DomSanitizer} from '@angular/platform-browser';
import {loadSvgResources} from '../utils/svg.util';
import {SharedModule} from '../shared/shared.module';
import {MatIconRegistry} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {RouterModule} from '@angular/router';
import 'rxjs/add/operator/take';
import {HttpClientModule} from '@angular/common/http';
import '../utils/debug.util';

@NgModule({
  imports: [
    HttpModule, SharedModule, BrowserAnimationsModule, RouterModule, HttpClientModule
  ],
  exports: [
    HeaderComponent, FooterComponent, HttpModule, SharedModule, SidebarComponent, HttpClientModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent
  ],
  providers:[
    {
      provide: 'BASE_CONFIG', useValue: {
        uri: 'http://localhost:3000'
      }
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载');
    }
    loadSvgResources(ir, ds);
  }
}
