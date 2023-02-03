import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rain'
})
export class RainPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value) {
      let a = parseInt(value);
      let b = a / 25.4;
      let c = b.toFixed(2);
      let d = c.toString();
      value = d;
      return value;
    } else {
      return '0.00'
    }
  }

}
