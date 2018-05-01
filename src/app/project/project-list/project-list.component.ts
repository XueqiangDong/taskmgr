import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {slideToRight} from '../../anims/router.anim';
import {listAnimation} from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight, listAnimation
  ]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  projects = [
    {
      'id': 1,
      'name': '企业协作平台0',
      'desc': '这是一个企业内部项目管理平台',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'id': 2,
      'name': '企业协作平台1',
      'desc': '这是一个企业内部项目管理平台',
      'coverImg': 'assets/img/covers/1.jpg'
    },
    {
      'id': 3,
      'name': '企业协作平台2',
      'desc': '这是一个企业内部项目管理平台',
      'coverImg': 'assets/img/covers/2.jpg'
    },
  ];

  constructor(protected dialog: MatDialog) {
    // constructor() {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const diaglogRef = this.dialog.open(NewProjectComponent, {data: {title: '新增项目'}});
    diaglogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [...this.projects, {
        id: 4, name: '新项目4', desc: '又增加了一个新项目',
        coverImg: 'assets/img/covers/3.jpg'
      }];
    });
  }

  lanchInviteDialog() {
    const diaglogRef = this.dialog.open(InviteComponent);
  }

  launchUpdateDialog() {
    const diaglogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
  }

  launchConfirmDialog(project) {
    const diaglogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '您确认删除吗？'}});
    diaglogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projects = this.projects.filter(p => p.id !== project.id);
      }
    });
  }

}
