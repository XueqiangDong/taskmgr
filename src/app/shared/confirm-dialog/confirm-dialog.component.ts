import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <form>
      <h2 mat-dialog-title>{{title}}</h2>
      <div mat-dialog-content>
        {{content}}
      </div>
      <div mat-dialog-actions>
        <button type="button" mat-raised-button color="primary" (click)="onClick(true)">确定</button>
        <button type="button" mat-raised-button mat-dialog-close (click)="onClick(false)">取消</button>
      </div>
    </form>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {

  title = '';
  content = '';

  constructor(protected dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) protected data) {
  }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }

}
