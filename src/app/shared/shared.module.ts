import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatCardModule, MatInputModule,
  MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule, MatAutocompleteModule, MatMenuModule, MatCheckboxModule,
  MatRadioModule, MatSelectModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatButtonToggleModule
} from '@angular/material';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DirectiveModule} from '../directive/directive.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';
import { AgeInputComponent } from './age-input/age-input.component';

@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule,
    MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule,
    MatAutocompleteModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatSelectModule,
    MatTooltipModule, MatDatepickerModule, MatNativeDateModule, DirectiveModule,
    FormsModule, ReactiveFormsModule, MatButtonToggleModule,
  ],
  exports: [
    CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule,
    MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule,
    MatAutocompleteModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatSelectModule,
    MatTooltipModule, MatDatepickerModule, MatNativeDateModule, DirectiveModule,
    FormsModule, ReactiveFormsModule, ImageListSelectComponent, AgeInputComponent,
    MatButtonToggleModule,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
  declarations: [ConfirmDialogComponent, ImageListSelectComponent, AgeInputComponent,]
})
export class SharedModule {
}
