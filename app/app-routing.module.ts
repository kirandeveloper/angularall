import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { SearchfilterComponent } from './searchfilter/searchfilter.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PrivacypComponent } from './privacyp/privacyp.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "contactus", component: ContactusComponent},
  {path: "product", component: ProductsComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "search", component: SearchComponent},
  {path: "searchfilter", component: SearchfilterComponent},
  {path: "privacyp", component: PrivacypComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
