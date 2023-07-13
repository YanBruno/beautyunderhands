import { Pipe, PipeTransform } from '@angular/core';
import { Email } from 'src/app/core/models/email.model';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(email: Email): string {
    return email.address;
  }

}
