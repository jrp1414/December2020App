import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ["student-edit.component.css"]
})
export class StudentEditComponent implements OnInit {

  studentEditForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
      FirstName: this.fb.control("", [Validators.required, Validators.minLength(3)]),
      LastName: this.fb.control("", Validators.required),
      MobileNo: this.fb.control(""),
      EmailId: this.fb.control("", [Validators.required, Validators.email]),
      NotificationType: this.fb.control("email"),
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
      })
    });
  }

  onSubmit() {
    console.log(this.studentEditForm);
    console.log(this.studentEditForm.value);
  }

  setNotification(notificationType: string) {
    let mobileNoControl = this.studentEditForm.get("MobileNo");
    if (notificationType == 'mobile') {
      mobileNoControl.setValidators(Validators.required);
    } else {
      mobileNoControl.clearValidators();
    }
    mobileNoControl.updateValueAndValidity();
  }

}
