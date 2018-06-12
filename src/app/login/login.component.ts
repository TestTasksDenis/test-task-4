import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  contactForm: FormGroup;
  showModal = false;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup(
      {
        username: new FormControl(null, [Validators.required]),
        pass: new FormControl(null, [Validators.required, Validators.minLength(6)])
      }
    );
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.showModal = true;

      window.setTimeout(() => {
        this.showModal = false;
        this.contactForm.reset();
      }, 5000);
    }
  }
}
