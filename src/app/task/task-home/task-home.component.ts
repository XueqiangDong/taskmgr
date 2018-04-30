import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '代办',
      tasks: [
        {
          id: 1,
          desc: '任务1：麦咖啡',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: 'zhangsan',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务2：完成培训',
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: 'lisi',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务1：起床',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'kailin',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务2：给儿子准备早餐',
          completed: true,
          priority: 1,
          owner: {
            id: 2,
            name: 'woottw',
            avatar: 'avatars:svg-14'
          },
          dueDate: new Date(),
        },
      ]
    }
  ];

  constructor(protected dialog: MatDialog) {
  }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

}
