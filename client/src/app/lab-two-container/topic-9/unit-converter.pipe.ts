import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitConverter',
})
export class UnitConverterPipe implements PipeTransform {
  transform(km: number): number {
    const kmToMeter = 1000;

    return km * kmToMeter;
  }
}
