import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestList } from './request-list/request-list';
import { RequestCreate } from './request-create/request-create';
import { RequestEdit } from './request-edit/request-edit';
import { RequestDetail } from './request-detail/request-detail';
import { RequestLines } from './request-lines/request-lines';
import { LineItemCreate } from './line-item-create/line-item-create';
import { LineItemEdit } from './line-item-edit/line-item-edit';



@NgModule({
  declarations: [
    RequestList,
    RequestCreate,
    RequestEdit,
    RequestDetail,
    RequestLines,
    LineItemCreate,
    LineItemEdit
  ],
  imports: [
    CommonModule
  ]
})
export class RequestModule { }
