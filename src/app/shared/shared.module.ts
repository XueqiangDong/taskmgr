import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatCardModule, MatInputModule,
  MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule, MatAutocompleteModule, MatMenuModule, MatCheckboxModule,
  MatRadioModule, MatSelectModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule,
    MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule,
    MatAutocompleteModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatSelectModule,
    MatTooltipModule, MatDatepickerModule, MatNativeDateModule
  ],
  exports: [
    CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule,
    MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule,
    MatAutocompleteModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatSelectModule,
    MatTooltipModule, MatDatepickerModule, MatNativeDateModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
  declarations: [ConfirmDialogComponent]
})
export class SharedModule {
}
