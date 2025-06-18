import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestList } from './request-list/request-list';
import { RequestCreate } from './request-create/request-create';
import { RequestEdit } from './request-edit/request-edit';



@NgModule({
  declarations: [
    RequestList,
    RequestCreate,
    RequestEdit
  ],
  imports: [
    CommonModule
  ]
})
export class RequestModule { }
