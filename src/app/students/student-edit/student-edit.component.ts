import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentEditForm: FormGroup;
  FirstName: FormControl = new FormControl();
  LastName: FormControl = new FormControl();
  MobileNo: FormControl = new FormControl();
  EmailId: FormControl = new FormControl();
  NotificationType: FormControl = new FormControl();
  AddressId: FormControl = new FormControl();
  AddLine1: FormControl = new FormControl();
  AddLine2: FormControl = new FormControl();
  AddLine3: FormControl = new FormControl();
  City: FormControl = new FormControl();
  State: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.studentEditForm = new FormGroup({
      FirstName: this.FirstName,
      LastName: this.LastName,
      MobileNo: this.MobileNo,
      EmailId: this.EmailId,
      NotificationType: this.NotificationType,
      AddLine1: this.AddLine1,
      AddLine2: this.AddLine2,
      AddLine3: this.AddLine3,
      City: this.City,
      State: this.State
    });
  }

  onSubmit() {
    console.log(this.studentEditForm);
    console.log(this.studentEditForm.value);
  }

}
