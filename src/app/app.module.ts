import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {LoginModule} from './login/login.module';
import {ProjectModule} from './project/project.module';
import {MatDialog} from '@angular/material';
import {TaskModule} from './task/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule, LoginModule, ProjectModule,
    TaskModule,
  ],
  providers: [MatDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
