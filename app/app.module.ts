import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PrivacypComponent } from './privacyp/privacyp.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SearchfilterComponent } from './searchfilter/searchfilter.component';
import { ToogleComponent } from './toogle/toogle.component';
import { Mycomp1Component } from './toogle/mycomp1/mycomp1.component';
import { DialogComponent } from './dialog/dialog.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { Childcomp2Component } from './childcomp2/childcomp2.component';
import { ParentcompComponent } from './parentcomp/parentcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    HomeComponent,
    ContactusComponent,
    SearchComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    PrivacypComponent,
    CarouselComponent,
    HomeBannerComponent,
    SearchfilterComponent,
    ToogleComponent,
    Mycomp1Component,
    DialogComponent,
    InputComponentComponent,
    ChildcompComponent,
    Childcomp2Component,
    ParentcompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
