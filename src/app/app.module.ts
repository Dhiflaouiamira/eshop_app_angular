import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AdsBannerComponent } from './components/ads-banner/ads-banner.component';
import { BlogComponent } from './components/blog/blog.component';
import { InsightsComponent } from './components/dashboard/insights/insights.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { PromotionsComponent } from './components/dashboard/promotions/promotions.component';
import { ClientComponent } from './components/dashboard/client/client.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { MySpaceComponent } from './components/my-space/my-space.component';
import { ProfilComponent } from './components/my-space/profil/profil.component';
import { SelectionComponent } from './components/my-space/selection/selection.component';
import { AchatsComponent } from './components/my-space/achats/achats.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ContactComponent } from './components/dashboard/contact/contact.component';
import { MsgComponent } from './components/msg/msg.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ShopingCartComponent,
    LoginComponent,
    SignupComponent,
    AdsBannerComponent,
    BlogComponent,
    DashboardComponent,
    InsightsComponent,
    OrdersComponent,
    PromotionsComponent,
    ProfilComponent,
    ContactComponent,
    ClientComponent,
    ProductsComponent,
    ProductComponent,
    MySpaceComponent,
    AchatsComponent,
    SelectionComponent,
    ProductFormComponent,
    MsgComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
