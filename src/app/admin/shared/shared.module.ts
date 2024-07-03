import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { AccordionDirective } from './accordion/accordion.directive';
import { AccordionanchorDirective } from './accordion/accordionanchor.directive';
import { AccordionlinkDirective } from './accordion/accordionlink.directive';

@NgModule({
  declarations: [
    AccordionanchorDirective,
    AccordionlinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionanchorDirective,
    AccordionlinkDirective,
    AccordionDirective
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }
