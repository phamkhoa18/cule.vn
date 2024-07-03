import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { OwncarouselComponent } from './layout-components/separate-components/owncarousel/owncarousel.component';
import { HomeComponent } from './layout-components/home/home.component';
import { DetailComponent } from './layout-components/detail/detail.component';
import { CategoryComponent } from './layout-components/category/category.component';
import { HotnewsComponent } from './layout-components/separate-components/hotnews/hotnews.component';
import { AdsnewsComponent } from './layout-components/separate-components/adsnews/adsnews.component';
import { NewsfeedComponent } from './layout-components/separate-components/newsfeed/newsfeed.component';
import { LoadingnewsBoxComponent } from './layout-components/separate-components/loadingnews-box/loadingnews-box.component';
import { LoadingnewsCategoryComponent } from './layout-components/separate-components/loadingnews-category/loadingnews-category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './layout-components/search/search.component';
import { PaginationComponent } from './layout-components/separate-components/pagination/pagination.component';

@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OwncarouselComponent,
    DetailComponent,
    CategoryComponent,
    HotnewsComponent,
    AdsnewsComponent,
    NewsfeedComponent,
    LoadingnewsBoxComponent,
    LoadingnewsCategoryComponent,
    SearchComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ClientModule { }
