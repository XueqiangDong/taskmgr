import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from '../new-task-list/new-task-list.component';
import {slideToRight} from '../../anims/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight,
  ]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  lists = [
    {
      id: 1,
      order: 1,
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
      order: 2,
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
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  launchConfirmDialog() {
    const diaglogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务列表', content: '您确认删除吗？'}});
    diaglogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog() {
    const diaglogRef = this.dialog.open(NewTaskListComponent, {data: {title: '更改列表：'}});
    diaglogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewListDialog() {
    const diaglogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建列表：'}});
    diaglogRef.afterClosed().subscribe(result => console.log(result));
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        let srcList = srcData.data;
        let tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        break;
      default:
        break;
    }
  }

  handleQuickTask(desc: string){
    console.log(desc);
  }

}
