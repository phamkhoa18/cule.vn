import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoMaterialModule } from 'src/app/demo-material-module';



@NgModule({
  declarations: [
    DashboardComponent,
    ContactsComponent,
    ProfileComponent,
    ActivityTimelineComponent,
    SalesOverviewComponent,
    OurVisiterComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DemoMaterialModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
