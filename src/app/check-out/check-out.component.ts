import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      last: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      Country: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      zip: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      card: new FormControl("", Validators.required),
      expiration: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      cvv: new FormControl("", Validators.required),
    });
   }



  ngOnInit() {
  }

}
