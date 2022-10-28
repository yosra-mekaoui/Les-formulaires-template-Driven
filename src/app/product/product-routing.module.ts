import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'productList',
    component:ProductListComponent
  },
  {
    path : '', component:AddProductTDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
