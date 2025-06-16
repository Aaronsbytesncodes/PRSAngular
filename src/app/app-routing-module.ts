import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserCreateComponent } from './features/user/user-create/user-create.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { VendorListComponent } from './features/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './features/vendor/vendor-create/vendor-create.component.ts';
import { VendorEditComponent } from './features/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './features/vendor/vendor-detail/vendor-detail.component';
const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'vendors', component: VendorListComponent },
  { path: 'vendors/create', component: VendorCreateComponent },
  { path: 'vendors/edit/:id', component: VendorEditComponent },
  { path: 'vendors/detail/:id', component: VendorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
