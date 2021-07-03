import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'Product' , component:ProductsComponent},
  {path:'AddProduct',component:AddProductsComponent},
  {path:'', redirectTo:"Product",pathMatch:'full'},
  {path:'productdetail/:id',component:ProductDetailsComponent},
  {path:'editproduct/:id',component:AddProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
