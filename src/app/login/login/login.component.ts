import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Quote} from '../../domain';
import {Observable} from 'rxjs/Observable';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as authActions from '../../actions/auth.action';
import * as actions from '../../actions/quote.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote$: Observable<Quote>;

  constructor(protected fb: FormBuilder,
              protected store$: Store<fromRoot.State>) {
    this.quote$ = this.store$.pipe(select(fromRoot.getQuoteState));
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['wpcfan@163.com', Validators.compose([Validators.required, Validators.email])],
      password: ['wp123456', Validators.required]
    });
    this.store$.dispatch({type: actions.QUOTE});
  }

  onSubmit({value, valid}: FormGroup, e: Event) {
    e.preventDefault();
    if (!valid) {
      return;
    }
    this.store$.dispatch(
      new authActions.LoginAction(value));
  }

}
