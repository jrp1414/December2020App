import { createAction, props } from "@ngrx/store";

export interface Auth{
    token:string;
    isAuthenticated:boolean;
}

export const authAction = createAction("Authentication Info",props<{auth:Auth}>());