import { Pipe, PipeTransform } from '@angular/core';
import { Name } from 'src/app/core/models/name.model';


@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(name: Name): string {
    return `${name.firstName} ${name.lastName}`;
  }

}
