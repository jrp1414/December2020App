import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from './student.data';
import { StudentService } from './student.service';

@Injectable({ providedIn: 'root' })
export class StudentDetailsResolver implements Resolve<Student> {
    constructor(private ss:StudentService) {
        
    }
    resolve(route: ActivatedRouteSnapshot): Observable<Student>{
        return this.ss.getStudent(route.params.id);
    }
}