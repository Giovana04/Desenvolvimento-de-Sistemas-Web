import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { UserLoginComponent } from './view/user-login/user-login.component';
import { ProductsComponent } from './view/products/products.component';
import { OrderComponent } from './view/order/order.component';
import { CustomerComponent } from './view/customer/customer.component';
import { UserRegisterComponent } from './view/user-register/user-register.component';
import { UserDetailsComponent } from './view/user-details/user-details.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"products", component: ProductsComponent},
  {path:"order", component: OrderComponent},
  {path:"customer", component: CustomerComponent},
  {path:"register", component: UserRegisterComponent},
  {path:"details", component: UserDetailsComponent},
  {path:"login", component: UserLoginComponent},
  {path:"**", redirectTo:"/login"},
  {path: "", redirectTo: "/login", pathMatch: "full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
