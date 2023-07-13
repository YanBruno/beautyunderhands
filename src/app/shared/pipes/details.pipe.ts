import { Pipe, PipeTransform } from '@angular/core';
import { Details } from 'src/app/core/models/details.model';

@Pipe({
  name: 'details'
})
export class DetailsPipe implements PipeTransform {

  transform(details: Details): string {
    return details.value;
  }

}
