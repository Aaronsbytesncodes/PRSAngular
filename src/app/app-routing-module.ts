import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Users
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserCreateComponent } from './features/user/user-create/user-create.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';

// Vendors
import { VendorListComponent } from './features/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './features/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './features/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './features/vendor/vendor-detail/vendor-detail.component';

// Products
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductCreateComponent } from './features/product/product-create/product-create.component';
import { ProductEditComponent } from './features/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';

// Requests & Line Items
import { RequestListComponent } from './features/request/request-list/request-list.component';
import { RequestCreateComponent } from './features/request/request-create/request-create.component';
import { RequestEditComponent } from './features/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './features/request/request-detail/request-detail.component';
import { RequestLinesComponent } from './features/request/request-lines/request-lines.component';
import { LineItemCreateComponent } from './features/request/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './features/request/line-item-edit/line-item-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },

  // Users
  { path: 'users', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },

  // Vendors
  { path: 'vendors', component: VendorListComponent },
  { path: 'vendors/create', component: VendorCreateComponent },
  { path: 'vendors/edit/:id', component: VendorEditComponent },
  { path: 'vendors/detail/:id', component: VendorDetailComponent },

  // Products
  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent },

  // Requests & Line Items
  { path: 'requests', component: RequestListComponent },
  { path: 'requests/create', component: RequestCreateComponent },
  { path: 'requests/edit/:id', component: RequestEditComponent },
  { path: 'requests/detail/:id', component: RequestDetailComponent },
  { path: 'requests/lines/:id', component: RequestLinesComponent },
  { path: 'requests/lines/:id/create', component: LineItemCreateComponent },
  { path: 'requests/lines/:id/edit/:lineItemId', component: LineItemEditComponent },

  // Fallback
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
