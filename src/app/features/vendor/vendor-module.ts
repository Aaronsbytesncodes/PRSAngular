import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorList } from './vendor-list/vendor-list';
import { VendorCreate } from './vendor-create/vendor-create';
import { VendorEdit } from './vendor-edit/vendor-edit';
import { VendorDetail } from './vendor-detail/vendor-detail';



@NgModule({
  declarations: [
    VendorList,
    VendorCreate,
    VendorEdit,
    VendorDetail
  ],
  imports: [
    CommonModule
  ]
})
export class VendorModule { }
