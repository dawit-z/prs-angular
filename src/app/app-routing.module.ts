import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RequestlineCreateComponent } from './requestlines/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestlines/requestline-edit/requestline-edit.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestLineComponent } from './requests/request-line/request-line.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestReviewItemComponent } from './requests/request-review-item/request-review-item.component';
import { RequestReviewsComponent } from './requests/request-reviews/request-reviews.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },


  { path: 'users', component: UserListComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'login', component: UserLoginComponent },

  { path: 'vendors', component: VendorListComponent },
  { path: 'vendor/create', component: VendorCreateComponent },
  { path: 'vendor/detail/:id', component: VendorDetailComponent },
  { path: 'vendor/edit/:id', component: VendorEditComponent },

  { path: 'products', component: ProductListComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },

  { path: 'requests', component: RequestListComponent },
  { path: 'request/create', component: RequestCreateComponent },
  { path: 'request/detail/:id', component: RequestDetailComponent },
  { path: 'request/edit/:id', component: RequestEditComponent },
  { path: 'request/lines/:id', component: RequestLineComponent },
  { path: 'request/reviews', component: RequestReviewsComponent },
  { path: 'request/review/:id', component: RequestReviewItemComponent },

  { path: 'requestline/create/:id', component: RequestlineCreateComponent },
  { path: 'requestline/edit/:id', component: RequestlineEditComponent },

  { path: 'about', component: AboutComponent },
  { path: '**', component: WildcardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
