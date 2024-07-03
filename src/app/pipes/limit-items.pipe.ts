import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitItems'
})
export class LimitItemsPipe implements PipeTransform {

  transform(items: any[], limit: number): any[] {
    if (!items || !Array.isArray(items)) {
      return [];
    }
    return items.slice(0, limit);
  }

}
