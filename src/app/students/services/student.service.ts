import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, students } from './student.data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList:Student[] = students;
  constructor(private http:HttpClient) { }
  private baseUrl:string = "http://localhost:44319/";
  notify:EventEmitter<boolean> = new EventEmitter();

  setOptions(){
    let token = localStorage.getItem("token");
    let header:HttpHeaders = new HttpHeaders({
      "authorization":"Bearer "+token
    });
    let options:{[name:string]:HttpHeaders} = {headers:header};
    return options;
  }

  getStudents():Observable<any>{
    return this.http.get(this.baseUrl+"GetStudents",this.setOptions());
  }

  getStudent(id:number):Observable<any>{
    return this.http.get(this.baseUrl+"GetStudent/"+id,this.setOptions());
  }

  UpdateStudent(student:Student):Observable<any>{
    return this.http.put(this.baseUrl+"UpdateStudent",student,this.setOptions());
  }

  AddStudent(student:Student):Observable<any>{
    return this.http.post(this.baseUrl+"AddStudent",student,this.setOptions());
  }

  DeleteStudent(id:number){
    return this.http.delete(this.baseUrl+"DeleteStudent/"+id,this.setOptions());
  }
}
