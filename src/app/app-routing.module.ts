import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MySpaceComponent } from './components/my-space/my-space.component';
import { ProductsComponent } from './components/products/products.component';
import { AchatsComponent } from './components/my-space/achats/achats.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MsgComponent } from './components/msg/msg.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path: 'products/edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'products/:id',
    component: ProductComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },  {
    
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'myspace',
    component: MySpaceComponent
  },
  {
    path: 'profil',
    component: MySpaceComponent
  },

  {
    path: 'achats',
    component: MySpaceComponent
  },


  {
    path: 'msg',
    component: MsgComponent
  },


  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
