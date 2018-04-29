import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatCardModule, MatInputModule,
  MatListModule, MatSlideToggleModule
} from '@angular/material';
import {LoginModule} from '../login/login.module';

@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule,
    MatInputModule, MatListModule, MatSlideToggleModule,
  ],
  exports: [
    CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule,
    MatInputModule, MatListModule, MatSlideToggleModule,
  ],
  declarations: []
})
export class SharedModule {
}