import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from 'src/app/core/models/phone.model';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: Phone): string {
    return phone.number;
  }

}
