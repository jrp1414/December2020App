import { Component, OnInit } from '@angular/core';
import { Student, students } from './services/student.data';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {
  studentsList:Student[];
  constructor(private ss:StudentService) { }

  ngOnInit(): void {
    this.studentsList = this.ss.getStudents();
  }

  RefreshStudents(){
    this.studentsList = this.ss.getStudents();
  }

  DeleteStudent(StudentId){
    this.ss.DeleteStudent(StudentId);
    this.RefreshStudents();
  }

}
