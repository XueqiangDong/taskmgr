import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) protected data,
              protected dialogRef: MatDialogRef<NewProjectComponent>) {
  }

  ngOnInit() {
  }

  onClick() {
    this.dialogRef.close('i received');
  }

}
