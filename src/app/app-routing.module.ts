import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductTypesComponent } from './product-types/product-types.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'product/:category',
    component: ProductTypesComponent,
    children: [{ path: ':type', component: ProductComponent }],
  },
  { path: 'products', component: ProductComponent },

  // { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent },
  // {
  //   path: 'appliances',
  //   component: ProductTypesComponent,
  //   data: { id: 1, name: 'Appliances' },
  //   children: [
  //     {
  //       path: 'tv',
  //       component: ProductTypesComponent,
  //       data: [{ id: 1, name: 'TV' }],
  //     },
  //     {
  //       path: 'washing machine',
  //       component: ProductTypesComponent,
  //       data: [{ id: 1, name: 'Washing Machine' }],
  //     },
  //   ],
  // },
  // { path: 'products', component: ProductComponent },
  // {
  //   path: 'electronics',
  //   component: ProductTypesComponent,
  //   data: { id: 1, name: 'Electronics' },
  //   children: [
  //     {
  //       path: 'mobile',
  //       component: ProductTypesComponent,
  //       data: { id: 1, name: 'mobile' },
  //     },
  //     {
  //       path: 'tablet',
  //       component: ProductTypesComponent,
  //       data: { id: 1, name: 'tablet' },
  //     }
  //   ],
  // },
  // {
  //   path: 'furniture',
  //   component: ProductTypesComponent,
  //   data: { id: 1, name: 'Furniture' },
  // },
  // {
  //   path: 'storage',
  //   component: ProductTypesComponent,
  //   data: { id: 1, name: 'Storage' },
  // },
  // {
  //   path: 'sports',
  //   component: ProductTypesComponent,
  //   data: { id: 1, name: 'Sports' },
  // },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
