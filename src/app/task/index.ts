import {NgModule} from '@angular/core';
import {TaskHomeComponent} from './task-home';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {SharedModule} from '../shared';
import {TaskRoutingModule} from './task-routing.module';
import {NewTaskComponent} from './new-task/new-task.component';
import {CopyTaskComponent} from './copy-task/copy-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';
import { QuickTaskComponent } from './quick-task/quick-task.component';
import {TaskHistoryItemComponent} from './task-history-item';
import {TaskFilterNavComponent} from './task-filter-nav';
import {TaskListHeaderComponent} from './task-list-header/task-list-header.component';

@NgModule({
  imports: [
    SharedModule, TaskRoutingModule,
  ],
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskHomeComponent,
    TaskListHeaderComponent,
    NewTaskComponent,
    NewTaskListComponent,
    CopyTaskComponent,
    QuickTaskComponent,
    TaskHistoryItemComponent,
    TaskFilterNavComponent,
  ],
  entryComponents: [
    NewTaskComponent, CopyTaskComponent, NewTaskListComponent,
  ]
})
export class TaskModule {
}
