import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule,
  MatSlideToggleModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog';
import {ImageListSelectComponent} from './image-list-select/image-list-select.component';
import {ChipsListComponent} from './chips-list/chips-list.component';
import {IdentityInputComponent} from './identity-input/identity-input.component';
import {AreaListComponent} from './area-list/area-list.component';
import {AgeInputComponent} from './age-input/age-input.component';
import {DirectivesModule} from '../directives';

const MATERIAL_MODULES = [
  MatToolbarModule, MatSidenavModule, MatAutocompleteModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatProgressBarModule, MatRadioModule, MatSelectModule, MatTabsModule,
  MatTooltipModule, MatSlideToggleModule,
];

const MODULES = [
  ...MATERIAL_MODULES,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  FlexLayoutModule,
  DirectivesModule
];

const DECLARATIONS = [
  ConfirmDialogComponent,
  ImageListSelectComponent,
  ChipsListComponent,
  IdentityInputComponent,
  AreaListComponent,
  AgeInputComponent,
];

const EXPORT_COMPONENTS = [
  ConfirmDialogComponent,
  ImageListSelectComponent,
  ChipsListComponent,
  IdentityInputComponent,
  AreaListComponent,
  AgeInputComponent,
];

@NgModule({
  imports: MODULES,
  exports: [
    ...MODULES,
    ...EXPORT_COMPONENTS
  ],
  declarations: DECLARATIONS,
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule {
}

export {ConfirmDialogComponent};
