import { createReducer, on } from "@ngrx/store";
import { Auth, authAction } from "./auth.action";

export const initialState:Auth={
  token:"",
  isAuthenticated:false  
};

export const authReducer = createReducer(initialState,on(authAction,(state,{auth})=>({token:auth.token,isAuthenticated:auth.isAuthenticated})));