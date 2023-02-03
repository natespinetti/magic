import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvin'
})
export class KelvinPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let a = parseFloat(value);
    let b = (a-273.15) * 9/5 + 32;
    let c = b.toFixed(0);
    let d = c.toString();
    value = d;
    return value;
  }

}
