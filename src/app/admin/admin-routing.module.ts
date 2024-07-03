import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';


const routes: Routes = [
    {
      path : '' , component : FullComponent, children: [
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
      { path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      { path: '',
      loadChildren: () => import('./component-childrens/component-childrens.module').then(m => m.ComponentChildrensModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
