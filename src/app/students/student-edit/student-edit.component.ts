import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormControlName, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Range } from '../services/range.validator';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ["student-edit.component.css"]
})
export class StudentEditComponent implements OnInit {

  studentEditForm: FormGroup;

  constructor(private fb: FormBuilder,private route:ActivatedRoute,private ss:StudentService) { }

  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
      FirstName: this.fb.control("", [Validators.required, Validators.minLength(3)]),
      LastName: this.fb.control("", Validators.required),
      MobileNo: this.fb.control("",Validators.pattern("[0-9 ]{11}")),
      EmailId: this.fb.control("", [Validators.required, Validators.email]),
      NotificationType: this.fb.control("email"),
      Age:this.fb.control(0,Range(10,25)), 
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
      })
    });

    this.studentEditForm.get("NotificationType").valueChanges.subscribe((val)=>{
      this.setNotification(val); 
    });

    this.route.params.subscribe((parms)=>{
      let student = this.ss.getStudent(+parms.id);
      this.studentEditForm.patchValue(student);
      // this.studentEditForm.setValue(student);
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

// function RangeValidation(control:AbstractControl):ValidationErrors | null {
//  if (control.value>25 || control.value<10) {
//    return {range:true};
//  } 
//  return null;
// }