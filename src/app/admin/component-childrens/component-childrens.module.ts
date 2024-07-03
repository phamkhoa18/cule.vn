import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentChildrensRoutingModule } from './component-childrens-routing.module';
import { CategoryComponent } from './category/category.component';
import { MenuComponent } from './menu/menu.component';
import { NewComponent } from './new/new.component';
import { ImageComponent } from './image/image.component';
import { TreeComponent } from './tree/tree.component';
import { CategoryDialogComponent } from './category/category-dialog/category-dialog.component';
import { AddnewComponent } from './new/addnew/addnew.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditnewComponent } from './new/editnew/editnew.component';
import { AddmenuComponent } from './menu/addmenu/addmenu.component';
import { EditmenuComponent } from './menu/editmenu/editmenu.component';
import { IndexmenuComponent } from './menu/indexmenu/indexmenu.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { PageComponent } from './page/page.component';
import { GenerateLayoutComponent } from './page/generate-layout/generate-layout.component';
import { ColumnsComponent } from './page/columns/columns.component';

@NgModule({
  declarations: [
    CategoryComponent,
    MenuComponent,
    NewComponent,
    ImageComponent,
    TreeComponent,
    CategoryDialogComponent,
    AddnewComponent,
    EditnewComponent,
    AddmenuComponent,
    EditmenuComponent,
    IndexmenuComponent,
    EditcategoryComponent,
    PageComponent,
    GenerateLayoutComponent,
    ColumnsComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    ComponentChildrensRoutingModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentChildrensModule { }
