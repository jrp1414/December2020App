import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentEditForm: FormGroup;
  hobbies:FormArray = this.fb.array([]);

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
      FirstName: this.fb.control(""),
      LastName: this.fb.control(""),
      MobileNo: this.fb.control(""),
      EmailId: this.fb.control(""),
      NotificationType: this.fb.control(""),
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
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
