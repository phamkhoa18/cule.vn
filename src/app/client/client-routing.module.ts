import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './layout-components/home/home.component';
import { DetailComponent } from './layout-components/detail/detail.component';
import { CategoryComponent } from './layout-components/category/category.component';
import { SearchComponent } from './layout-components/search/search.component';

const routes: Routes = [
  {path : '' , component : ClientComponent , children : [
     {path : '' , component : HomeComponent},
     {path : 'bai-viet/:name' , component : DetailComponent},
     {path : 'danh-muc/:name' , component : CategoryComponent} ,
     {path : 'tim-kiem/:name' , component : SearchComponent} ,
     {path : '' , redirectTo : "/" , pathMatch : 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
