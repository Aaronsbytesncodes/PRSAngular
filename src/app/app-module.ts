
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { Menu } from './core/menu/menu';
import { NotFound } from './core/not-found/not-found';
import { FormsModule } from '@angular/forms';

// User components
import { UserListComponent } from './features/user/user-list/user-list';
import { UserCreateComponent } from './features/user/user-create/user-create';
import { UserEditComponent } from './features/user/user-edit/user-edit';
import { UserDetailComponent } from './features/user/user-detail/user-detail';

// Vendor components

import { VendorListComponent } from './features/vendor/vendor-list/vendor-list';
import { VendorCreateComponent } from './features/vendor/vendor-create/vendor-create';
import { VendorEditComponent } from './features/vendor/vendor-edit/vendor-edit';
import { VendorDetailComponent } from './features/vendor/vendor-detail/vendor-detail';

// Product components
import { ProductListComponent } from './features/product/product-list/product-list';
import { ProductCreateComponent } from './features/product/product-create/product-create';
import { ProductEditComponent } from './features/product/product-edit/product-edit';
import { ProductDetailComponent } from './features/product/product-detail/product-detail';

// Request & LineItems
import { RequestListComponent } from './features/request/request-list/request-list';
import { RequestCreateComponent } from './features/request/request-create/request-create';
import { RequestEditComponent } from './features/request/request-edit/request-edit';
import { RequestDetailComponent } from './features/request/request-detail/request-detail';
import { RequestLinesComponent } from './features/request/request-lines/request-lines';
import { LineItemCreateComponent } from './features/request/line-item-create/line-item-create';
import { LineItemEditComponent } from './features/request/line-item-edit/line-item-edit';
import { UserLogin } from './features/user/user-login/user-login';
import { ErrorHandler, Provider } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,

    // Users
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
    UserLogin
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

