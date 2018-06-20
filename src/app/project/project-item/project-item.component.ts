import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';
import {cardAnim} from '../../anim';
import {Project} from '../../domain';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent {

  @Input() item: Project;
  @Output() itemSelected = new EventEmitter<void>();
  @Output() launchUpdateDialog = new EventEmitter<void>();
  @Output() launchInviteDailog = new EventEmitter<void>();
  @Output() launchDeleteDailog = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

  onClick(ev: Event) {
    ev.preventDefault();
    this.itemSelected.emit();
  }

  openUpdateDialog(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.launchUpdateDialog.emit();
  }

  openInviteDialog(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.launchInviteDailog.emit();
  }

  openDeleteDialog(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.launchDeleteDailog.emit();
  }

  constructor() {}

}
