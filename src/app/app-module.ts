
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { Appcomponent } from './app';

// User components
import { UserListComponent } from './features/user/user-list';
import { UserCreateComponent } from './features/user/user-create';
import { UserEditComponent } from './features/user/user-edit';
import { UserDetailComponent } from './features/user/user-detail';

// Vendor components
import { VendorListComponent } from './features/vendor/vendor-list';
import { VendorCreateComponent } from './features/vendor/vendor-create';
import { VendorEditComponent } from './features/vendor/vendor-edit';
import { VendorDetailComponent } from './features/vendor/vendor-detail';

// Product components
import { ProductListComponent } from './features/product/product-list';
import { ProductCreateComponent } from './features/product/product-create';
import { ProductEditComponent } from './features/product/product-edit';
import { ProductDetailComponent } from './features/product/product-detail';

// Request & LineItems
import { RequestListComponent } from './features/request/request-list';
import { RequestCreateComponent } from './features/request/request-create';
import { RequestEditComponent } from './features/request/request-edit';
import { RequestDetailComponent } from './features/request/request-detail';
import { RequestLinesComponent } from './features/request/request-lines';
import { LineItemCreateComponent } from './features/request/line-item-create';
import { LineItemEditComponent } from './request/line-item-edit';
import { User } from './model/user';
import { LineItem } from './model/line-item';
import { Product } from './model/product';
import { Vendor } from './model/vendor';
import { Request } from './model/request';

@NgModule({
  declarations: [
    
    Appcomponent,

    // Users
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDetailComponent,

    // Vendors
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,

    // Products
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,

    // Requests & LineItems
    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestLinesComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    User,
    LineItem,
    Product,
    Vendor,
    Request
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [Appcomponent]
})
export class AppModule {}