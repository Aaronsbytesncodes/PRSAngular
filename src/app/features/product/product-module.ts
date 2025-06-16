import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetail } from './product-detail/product-detail';
import { ProductCreate } from './product-create/product-create';
import { ProductEdit } from './product-edit/product-edit';
import { ProductList } from './product-list/product-list';



@NgModule({
  declarations: [
    ProductDetail,
    ProductCreate,
    ProductEdit,
    ProductList
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
