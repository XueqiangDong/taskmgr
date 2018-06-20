import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared';
import {LoginModule} from './login';
import {ProjectModule} from './project';
import {MatDialog} from '@angular/material';
import {TaskModule} from './task';
import {QuoteService} from './services/quote.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    LoginModule, ProjectModule,
    TaskModule, BrowserAnimationsModule,
  ],
  providers: [MatDialog, QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
