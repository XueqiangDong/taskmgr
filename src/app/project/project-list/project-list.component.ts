import {Component, HostBinding} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/project.action';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared';
import {listAnimation, slideToRight} from '../../anim';
import { Project, User } from '../../domain';
import { map, take, switchMap, reduce, filter } from 'rxjs/operators';
import { range } from 'rxjs/observable/range';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight, listAnimation
  ]
})
export class ProjectListComponent {

  @HostBinding('@routeAnim') state: string;
  projects$: Observable<Project[]>;
  listAnim$: Observable<number>;

  constructor(private store$: Store<fromRoot.State>,
              private dialog: MatDialog) {
    this.store$.dispatch(new actions.LoadProjectsAction());
    this.projects$ = this.store$.pipe(select(fromRoot.getProjects));
    this.listAnim$ = this.projects$.pipe(map(p => p.length));
  }

  selectProject(project: Project) {
    this.store$.dispatch(new actions.SelectProjectAction(project));
  }

  openNewProjectDialog() {
    const img = `/assets/img/covers/${Math.floor(Math.random() * 40)}_tn.jpg`;
    const thumbnails$ = this.getThumbnailsObs();
    const dialogRef = this.dialog.open(NewProjectComponent, {data: { thumbnails: thumbnails$, img: img}});
    dialogRef.afterClosed()
      .pipe(
        take(1)
      )
      .subscribe(val => {
        if (val) {
          const converImg = this.buildImgSrc(val.coverImg);
          this.store$.dispatch(new actions.AddProjectAction({...val, coverImg: converImg}));
        }
      });
  }

  openUpdateDialog(project: Project) {
    const thumbnails$ = this.getThumbnailsObs();
    const dialogRef = this.dialog.open(NewProjectComponent, {data: { project: project, thumbnails: thumbnails$}});
    dialogRef.afterClosed()
      .pipe(
        take(1)
      )
      .subscribe(val => {
        if (val) {
          const converImg = this.buildImgSrc(val.coverImg);
          this.store$.dispatch(new actions.UpdateProjectAction({...val, id: project.id, coverImg: converImg}));
        }
      });
  }

  openInviteDialog(project: Project) {
    this.store$
      .pipe(
        select(fromRoot.getProjectMembers(<string>project.id)),
        take(1),
        map(members => this.dialog.open(InviteComponent, {data: { members: members}})),
        switchMap(dialogRef => dialogRef.afterClosed()
          .pipe(
            take(1),
            filter(n => n)
          )
        )
      )
      .subscribe(val => {
        this.store$.dispatch(new actions.InviteMembersAction({projectId: <string>project.id, members: <User[]>val}));
      });
  }

  openDeleteDialog(project: Project) {
    const confirm = {
      title: '删除项目：',
      content: '确认要删除该项目？',
      confirmAction: '确认删除'
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {dialog: confirm}});

    // 使用 take(1) 来自动销毁订阅，因为 take(1) 意味着接收到 1 个数据后就完成了
    dialogRef.afterClosed()
      .pipe(
        take(1)
      )
      .subscribe(val => {
        if (val) {
          this.store$.dispatch(new actions.DeleteProjectAction(project));
        }
      });
  }

  private getThumbnailsObs(): Observable<string[]> {
    return range(0, 40)
      .pipe(
        map(i => `/assets/img/covers/${i}_tn.jpg`),
        reduce((r: string[], x: string) => {
          return [...r, x];
        }, [])
      );
  }

  private buildImgSrc(img: string): string {
    return img.indexOf('_') > -1 ? img.split('_', 1)[0] + '.jpg' : img;
  }

}
