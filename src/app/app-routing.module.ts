import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './guard/auth.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {path : '', redirectTo: 'home' , pathMatch: 'full'},
  {path : 'home', component : HomePageComponent,},
  {path : 'product/:id', component : ProductPageComponent},
  {path : 'products-details/:id', component : ProductDetailPageComponent},
  {path : 'about', component : AboutPageComponent, canActivate:[authGuard]},
  {path : 'contact', component : ContactPageComponent, canActivate:[authGuard]},
  {path : 'register', component :RegisterPageComponent},
  {path : 'login', component : LoginPageComponent},
  {path : 'category', component : CategoryComponent},
  {path : '**', component: ErrorPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
