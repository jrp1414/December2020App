import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student, students } from './services/student.data';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {
  studentsList:Student[];
  constructor(private ss:StudentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data)=>{
      this.studentsList = data.students;
    });
    this.ss.notify.subscribe((flag)=>{
      this.RefreshStudents();
    });
  }

  RefreshStudents(){
    this.ss.getStudents().subscribe((resp)=>{
      this.studentsList = resp;
    });
  }

  DeleteStudent(student:Student){
    if (confirm("Are you sure to delete "+student.FirstName+" "+student.LastName+" ?")) {
      this.ss.DeleteStudent(student.StudentId).subscribe((resp)=>{
        this.RefreshStudents();
      });  
    }
    
  }

}
