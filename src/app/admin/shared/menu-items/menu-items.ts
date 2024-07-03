import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'category', type: 'link', name: 'Category', icon: 'crop_7_5' },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'view_comfy' },
  { state: 'new', type: 'link', name: 'News', icon: 'view_list' },
  { state: 'image', type: 'link', name: 'Image', icon: 'view_headline' },
  { state: 'page', type: 'link', name: 'Page', icon: 'view_headline' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
