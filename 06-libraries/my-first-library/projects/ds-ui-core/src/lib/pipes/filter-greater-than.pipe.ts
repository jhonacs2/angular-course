import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGreaterThan',
  pure: false
})
export class FilterGreaterThanPipe implements PipeTransform {

  transform(numbers: number[], threshold: number): number[] {
    if (!numbers) return [];
    console.log('impure pie');
    return numbers.filter(n => n > threshold);
  }
}
