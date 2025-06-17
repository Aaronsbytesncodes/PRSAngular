
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Users
import { UserListComponent } from './features/user/user-list';
import { UserCreateComponent } from './features/user/user-create';
import { UserEditComponent } from './features/user/user-edit';
import { UserDetailComponent } from './features/user/user-detail';

// Vendors
import { VendorListComponent } from './features/vendor/vendor-list';
import { VendorCreateComponent } from './features/vendor/vendor-create';
import { VendorEditComponent } from './features/vendor/vendor-edit';
import { VendorDetailComponent } from './features/vendor/vendor-detail';

// Products
import { ProductListComponent } from './features/product/product-list';
import { ProductCreateComponent } from './features/product/product-create';
import { ProductEditComponent } from './features/product/product-edit';
import { ProductDetailComponent } from './features/product/product-detail';

// Requests & LineItems
import { RequestListComponent } from './features/request/request-list';
import { RequestCreateComponent } from './features/request/request-create';
import { RequestEditComponent } from './features/request/request-edit';
import { RequestDetailComponent } from './features/request/request-detail';
import { RequestLinesComponent } from './features/request/request-lines';
import { LineItemCreateComponent } from './features/request/line-item-create';
import { LineItemEditComponent } from './features/request/line-item-edit';

const routes: Routes = [
  // Default
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