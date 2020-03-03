import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["./form-input.component.css"]
})
export class FormInputComponent implements OnInit {
  registrationForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ]),
    contactNo: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[0-9]\d*$/),
      Validators.minLength(10)
    ]),
    setPwd: new FormControl("", Validators.required),
    confirmPwd: new FormControl("", [this.checkConfirmPass.bind(this)])
  });

  constructor(private _router: Router) {}

  checkConfirmPass(formControl: FormControl) {
    if (typeof this.registrationForm !== "undefined") {
      if (
        formControl.value == "" ||
        this.registrationForm.controls.setPwd.value != formControl.value
      ) {
        return { incorrect: true };
      } else {
        console.log(formControl.value);
        return null;
      }
    }
  }

  onSubmitted() {
    console.log(this.registrationForm.value);
    alert("We are thankful getting your response 🎉");
    this.registrationForm.reset();
    setTimeout(() => {
      this._router.navigateByUrl("/showData");
    }, 500);
  }
  ngOnInit() {}
}
