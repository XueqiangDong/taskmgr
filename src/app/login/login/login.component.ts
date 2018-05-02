import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(protected fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['wan@lol.com', Validators.compose([Validators.required, Validators.email, this.validator])],
      password: ['', Validators.required]
    });
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(`${JSON.stringify(value)},${valid}`);
  }

  validator(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null;
    }
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    } else {
      return {
        emailNotValid: 'The email not correct'
      };
    }
  }

}
