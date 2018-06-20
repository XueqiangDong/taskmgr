import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTaskListComponent implements OnInit {

  form: FormGroup;
  dialogTitle: string;

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<NewTaskListComponent>) {
  }

  ngOnInit() {
    if (!this.data.name) {
      this.form = this.fb.group({
        name: ['', Validators.compose([Validators.required, Validators.maxLength(10)])]
      });
      this.dialogTitle = '创建列表：';
    } else {
      this.form = this.fb.group({
        name: [this.data.name, Validators.compose([Validators.required, Validators.maxLength(10)])],
      });
      this.dialogTitle = '修改列表：';
    }
  }

  onSubmit(ev: Event) {
    ev.preventDefault();
    if (!this.form.valid) {
      return;
    }
    this.dialogRef.close(this.form.value.name);
  }

}
