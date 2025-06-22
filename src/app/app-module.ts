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
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserCreateComponent } from './features/user/user-create/user-create.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { UserLogin } from './features/user/user-login/user-login.component';

// Vendor components
import { VendorListComponent } from './features/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './features/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './features/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './features/vendor/vendor-detail/vendor-detail.component';

// Product components
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductCreateComponent } from './features/product/product-create/product-create.component';
import { ProductEditComponent } from './features/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';

// Request & LineItems
import { RequestListComponent } from './features/request/request-list/request-list.component';
import { RequestCreateComponent } from './features/request/request-create/request-create.component';
import { RequestEditComponent } from './features/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './features/request/request-detail/request-detail.component';
import { RequestLinesComponent } from './features/request/request-lines/request-lines.component';
import { LineItemCreateComponent } from './features/request/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './features/request/line-item-edit/line-item-edit.component';

@NgModule({
  declarations: [
    AppComponent,

    // Core
    Menu, 
    NotFound,

    // Users
    UserCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    UserListComponent,
    UserLogin,

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
