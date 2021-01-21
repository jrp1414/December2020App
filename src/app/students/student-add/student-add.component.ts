import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styles: []
})
export class StudentAddComponent implements OnInit {
  studentAddForm: FormGroup;
  isSubmitted:boolean=false;
  studentId: number;
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private ss: StudentService,private router:Router) { }

  ngOnInit(): void {
    this.studentAddForm = this.fb.group({
      FirstName: this.fb.control("", [Validators.required, Validators.minLength(3)]),
      LastName: this.fb.control("", Validators.required),
      MobileNo: this.fb.control("", Validators.pattern("[0-9 ]{11}")),
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

    this.studentAddForm.get("NotificationType").valueChanges.subscribe((val) => {
      this.setNotification(val);
    });
  }

  onSubmit() {
    this.ss.AddStudent(this.studentAddForm.value).subscribe((resp) => {
      this.isSubmitted = true;
      this.ss.notify.emit(true);
      this.router.navigate(["students"]);
    });
  }

  setNotification(notificationType: string) {
    let mobileNoControl = this.studentAddForm.get("MobileNo");
    if (notificationType == 'mobile') {
      mobileNoControl.setValidators(Validators.required);
    } else {
      mobileNoControl.clearValidators();
    }
    mobileNoControl.updateValueAndValidity();
  }
}
