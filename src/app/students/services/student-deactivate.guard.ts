import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StudentEditComponent } from '../student-edit/student-edit.component';


@Injectable({providedIn: 'root'})
export class StudentEditGuard implements CanDeactivate<StudentEditComponent> {
    canDeactivate(
        component: StudentEditComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): boolean {
        if (component.studentEditForm.dirty) {
            if (confirm("Are you sure to Navigate away and loose all changes?")) {
                return true;
            }
            return false;
        }
        return true;
    }
}