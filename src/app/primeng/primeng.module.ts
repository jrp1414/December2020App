import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {ChipsModule} from 'primeng/chips';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService} from 'primeng/api';


@NgModule({
  declarations: [],
  exports:[
    ToastModule,
    ButtonModule,
    RippleModule,
    ChipsModule,
    ConfirmPopupModule
  ]
})
export class PrimengModule { }
