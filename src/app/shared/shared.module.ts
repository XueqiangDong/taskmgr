import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatCardModule, MatInputModule,
  MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule, MatAutocompleteModule, MatMenuModule, MatCheckboxModule,
  MatRadioModule, MatSelectModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatButtonToggleModule, MatTabsModule
} from '@angular/material';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DirectiveModule} from '../directive/directive.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImageListSelectComponent} from './image-list-select/image-list-select.component';
import {AgeInputComponent} from './age-input/age-input.component';
import {IdentityInputComponent} from './identity-input/identity-input.component';
import {AreaListComponent} from './area-list/area-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule,
    MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule,
    MatAutocompleteModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatSelectModule,
    MatTooltipModule, MatDatepickerModule, MatNativeDateModule, DirectiveModule,
    FormsModule, ReactiveFormsModule, MatButtonToggleModule, MatTabsModule, FlexLayoutModule,
  ],
  exports: [
    CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule,
    MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule,
    MatAutocompleteModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatSelectModule,
    MatTooltipModule, MatDatepickerModule, MatNativeDateModule, DirectiveModule,
    FormsModule, ReactiveFormsModule, ImageListSelectComponent, AgeInputComponent,
    MatButtonToggleModule, MatTabsModule, IdentityInputComponent, AreaListComponent,
    FlexLayoutModule,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
  declarations: [
    ConfirmDialogComponent, ImageListSelectComponent, AgeInputComponent,
    IdentityInputComponent, AreaListComponent,
  ]
})
export class SharedModule {
}
