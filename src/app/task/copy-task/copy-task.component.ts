import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyTaskComponent implements OnInit {

  lists: any[];

  constructor(@Inject(MAT_DIALOG_DATA) protected data,
              protected dialogRef: MatDialogRef<CopyTaskComponent>) {
  }

  ngOnInit() {
    this.lists = this.data.lists;
  }

}
