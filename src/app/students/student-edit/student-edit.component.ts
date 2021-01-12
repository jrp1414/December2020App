import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentEditForm: FormGroup;
  hobbies:FormArray = new FormArray([]);

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
      }),
      Hobbies:this.hobbies
    });
  }

  onSubmit() {
    console.log(this.studentEditForm);
    console.log(this.studentEditForm.value);
  }

  AddHobby(){
    this.hobbies.push(new FormControl());
  }

}
