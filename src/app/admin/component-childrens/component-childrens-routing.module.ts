import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { MenuComponent } from './menu/menu.component';
import { ImageComponent } from './image/image.component';
import { NewComponent } from './new/new.component';
import { AddnewComponent } from './new/addnew/addnew.component';
import { EditnewComponent } from './new/editnew/editnew.component';
import { AddmenuComponent } from './menu/addmenu/addmenu.component';
import { EditmenuComponent } from './menu/editmenu/editmenu.component';
import { IndexmenuComponent } from './menu/indexmenu/indexmenu.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path : 'category' , component : CategoryComponent},
  {path : 'category/edit/:id' , component : EditcategoryComponent},
  {path : 'menu' , component : MenuComponent},
  {path : 'menu/add' , component : AddmenuComponent},
  {path : 'menu/index' , component : IndexmenuComponent},
  {path : 'menu/edit/:id' , component : EditmenuComponent},
  {path : 'image' , component : ImageComponent},
  {path : 'new' , component : NewComponent},
  {path : 'new/add' , component : AddnewComponent},
  {path : 'new/edit/:id' , component : EditnewComponent},
  {path : 'page' , component : PageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentChildrensRoutingModule { }
