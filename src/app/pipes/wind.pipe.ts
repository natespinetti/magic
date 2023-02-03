import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wind'
})
export class WindPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let a = parseInt(value);
    let b = a * 2.237;
    let c = b.toFixed(0);
    let d = c.toString();
    value = d;
    return value;
  }

}
