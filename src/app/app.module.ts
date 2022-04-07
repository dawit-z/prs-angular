import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    NavComponent,
    VendorListComponent,
    ProductListComponent,
    RequestListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    RequestEditComponent,
    RequestCreateComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
