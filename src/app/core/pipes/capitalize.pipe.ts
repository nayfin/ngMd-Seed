import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
  // TODO: implement a capitalize each arg
  // value.replace(/\b\w/g, symbol => symbol.toLocaleUpperCase())
}
