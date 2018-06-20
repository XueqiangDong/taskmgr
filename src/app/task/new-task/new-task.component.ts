import {Inject, OnInit, OnDestroy, Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { parse } from 'date-fns';
import { User, TaskHistory } from '../../domain';
import { TaskHistoryVM } from '../../vm';
import { getTaskHistoryVMs } from '../../utils/history.util';
import * as fromRoot from '../../reducers';
import * as TaskHistoryActions from '../../actions/task-history.action';
import * as TaskActions from '../../actions/task.action';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})

export class NewTaskComponent implements OnInit, OnDestroy {

  private taskHistories$: Observable<TaskHistory[]>;
  private _sub: Subscription;
  taskHistories: TaskHistoryVM[] = [];

  form: FormGroup;
  dialogTitle: string;
  notConfirm = true;
  delInvisible = true;
  priorities: { label: string; value: number }[] = [
    {
      label: '普通',
      value: 3
    },
    {
      label: '重要',
      value: 2
    },
    {
      label: '紧急',
      value: 1
    },
  ];

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<NewTaskComponent>,
              private store$: Store<fromRoot.State>) {
    this.taskHistories$ = this.store$.select(fromRoot.getTaskHistories);
  }

  ngOnInit() {
    if (!this.data.task) {
      this.form = this.fb.group({
        desc: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
        priority: [3],
        dueDate: [],
        reminder: [],
        owner: [[this.data.owner]],
        followers: [[]],
        remark: ['', Validators.maxLength(40)]
      });
      this.dialogTitle = '创建任务：';
      this.delInvisible = true;
    } else {
      this.form = this.fb.group({
        desc: [this.data.task.desc, Validators.compose([Validators.required, Validators.maxLength(20)])],
        priority: [this.data.task.priority],
        dueDate: [this.data.task.dueDate ? parse(this.data.task.dueDate) : null],
        reminder: [this.data.task.reminder ? parse(this.data.task.reminder) : null],
        owner: [this.data.task.owner ? [this.data.task.owner] : []],
        followers: [this.data.task.participants ? [...this.data.task.participants] : []],
        remark: [this.data.task.remark, Validators.maxLength(40)]
      });
      this.dialogTitle = '修改任务：';
      this.delInvisible = false;

      this.loadTaskHistories();
    }
  }

  ngOnDestroy() {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

  loadTaskHistories() {
    this.store$.dispatch(new TaskHistoryActions.LoadTaskHistoryAction(this.data.task.id));

    this._sub = this.taskHistories$.subscribe(histories => {
      this.taskHistories = getTaskHistoryVMs(histories);
      console.log('<loadTaskHistories>', JSON.stringify(this.taskHistories));
    });
  }

  onSubmit({ value, valid }: FormGroup, ev: Event) {
    ev.preventDefault();
    if (!valid) {
      return;
    }

    this.store$.dispatch(new TaskActions.UpdatingTaskAction({
      ...this.data.task,
      desc: value.desc,
      owner: value.owner.length > 0 ? value.owner[0] : null,
      participants: value.followers,
      dueDate: value.dueDate,
      priority: value.priority,
      remark: value.remark,
      reminder: value.reminder,
    }));

    this.dialogRef.close({
      type: 'addOrUpdate', task: {
        desc: value.desc,
        participantIds: value.followers.map((u: User) => u.id),
        ownerId: value.owner.length > 0 ? value.owner[0].id : null,
        dueDate: value.dueDate,
        reminder: value.reminder,
        priority: value.priority,
        remark: value.remark
      }
    });
  }

  onDelClick(confirm: boolean) {
    this.notConfirm = confirm;
  }

  reallyDel() {
    this.dialogRef.close({ type: 'delete', task: this.data.task });
  }
}
