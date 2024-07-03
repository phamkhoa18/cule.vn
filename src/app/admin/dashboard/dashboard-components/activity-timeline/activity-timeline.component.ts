import { Component, OnInit } from '@angular/core';
import { Activity, activities } from './activity-timeline-data';

@Component({
  selector: 'app-activity-timeline',
  templateUrl: './activity-timeline.component.html',
  styleUrls: ['./activity-timeline.component.scss']
})
export class ActivityTimelineComponent {
  activityData: Activity[] = activities;



  ngOnInit(): void {
  }
}
