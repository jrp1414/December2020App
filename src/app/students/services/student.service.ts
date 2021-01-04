import { Injectable } from '@angular/core';
import { Student, students } from './student.data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList:Student[] = students;
  constructor() { }

  getStudents():Student[]{
    return this.studentsList;
  }

  getStudent(id:number):Student{
    return this.studentsList.find((m)=>m.StudentId==id);
  }

  DeleteStudent(id:number){
    this.studentsList = this.studentsList.filter((s)=>s.StudentId!=id);
  }
}
