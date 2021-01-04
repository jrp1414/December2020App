import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  exports:[
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
  ]
})
export class PrimengModule { }
