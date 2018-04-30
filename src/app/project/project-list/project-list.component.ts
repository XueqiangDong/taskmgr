import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      'name': '企业协作平台0',
      'desc': '这是一个企业内部项目管理平台',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '企业协作平台1',
      'desc': '这是一个企业内部项目管理平台',
      'coverImg': 'assets/img/covers/1.jpg'
    },
    {
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
    const diaglogRef = this.dialog.open(NewProjectComponent, {data: {dark:true}});
    diaglogRef.afterClosed().subscribe(result => console.log(result));
  }

  lanchInviteDialog(){
    const diaglogRef = this.dialog.open(InviteComponent);
  }

}
