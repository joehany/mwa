import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: string, times: string): any {
    return Array(times).fill(value).join(' ');
  }

}
