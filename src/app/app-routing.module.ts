import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestComponent } from './requests/request/request.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorComponent } from './vendors/vendor/vendor.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "users", component: UserListComponent },
  { path: "user", component: UserComponent },
  { path: "vendors", component: VendorListComponent },
  { path: "vendor", component: VendorComponent },
  { path: "products", component: ProductListComponent },
  { path: "product", component: ProductComponent },
  { path: "requests", component: RequestListComponent },
  { path: "request", component: RequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
