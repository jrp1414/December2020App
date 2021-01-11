import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentEditForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.studentEditForm = new FormGroup({
      FirstName: new FormControl(),
      LastName: new FormControl(),
      MobileNo: new FormControl(),
      EmailId: new FormControl(),
      NotificationType: new FormControl(),
      Address: new FormGroup({
        AddLine1: new FormControl(),
        AddLine2: new FormControl(),
        AddLine3: new FormControl(),
        City: new FormControl(),
        State: new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.studentEditForm);
    console.log(this.studentEditForm.value);
  }

}
