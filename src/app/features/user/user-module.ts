import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList } from './user-list/user-list';
import { UserDetail } from './user-detail/user-detail';
import { UserEdit } from './user-edit/user-edit';
import { UserCreate } from './user-create/user-create';
import { UserDelete } from './user-delete/user-delete';



@NgModule({
  declarations: [
    UserList,
    UserDetail,
    UserEdit,
    UserCreate,
    UserDelete
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
