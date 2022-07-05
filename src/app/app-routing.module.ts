import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'homeproduct', loadChildren: './homeproduct/homeproduct.module#HomeproductPageModule' },
  { path: 'detailproduct', loadChildren: './detailproduct/detailproduct.module#DetailproductPageModule' },
  { path: 'particlular-product/:product_id', loadChildren: './particlular-product/particlular-product.module#ParticlularProductPageModule' },
  { path: 'size-page/:product_size', loadChildren: './size-page/size-page.module#SizePagePageModule' },
  { path: 'color-page/:product_color', loadChildren: './color-page/color-page.module#ColorPagePageModule' },
  { path: 'price-page/:product_price', loadChildren: './price-page/price-page.module#PricePagePageModule' },
  { path: 'discountproduct', loadChildren: './discountproduct/discountproduct.module#DiscountproductPageModule' },
  { path: 'saller-location', loadChildren: './saller-location/saller-location.module#SallerLocationPageModule' },
  { path: 'shortkurti', loadChildren: './shortkurti/shortkurti.module#ShortkurtiPageModule' },
  { path: 'longkurti', loadChildren: './longkurti/longkurti.module#LongkurtiPageModule' },
  { path: 'anarkalikurti', loadChildren: './anarkalikurti/anarkalikurti.module#AnarkalikurtiPageModule' },
  { path: 'cartpage', loadChildren: './cartpage/cartpage.module#CartpagePageModule' },
  { path: 'serchpage', loadChildren: './serchpage/serchpage.module#SerchpagePageModule' },
  { path: 'pastorder', loadChildren: './pastorder/pastorder.module#PastorderPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
