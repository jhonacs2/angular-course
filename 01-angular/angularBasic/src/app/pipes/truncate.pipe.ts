import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    console.log('pipe execution');
    if (!value) return '';

    if (value.length <= limit) return value;

    return `${value.substring(0, limit)} ...`;
  }
}
