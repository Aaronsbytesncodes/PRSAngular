import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList, UserListComponent } from './user-list/user-list';
import { UserDetail, UserDetailComponent } from './user-detail/user-detail';
import { UserEdit, UserEditComponent } from './user-edit/user-edit';
import { UserCreate, UserCreateComponent } from './user-create/user-create';
import { UserLogin } from './user-login/user-login';



@NgModule({
  declarations: [
    UserList,
    UserDetail,
    UserEdit,
    UserCreate,
    UserLogin

  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
