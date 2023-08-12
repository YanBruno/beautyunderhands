import { Pipe, PipeTransform } from '@angular/core';
import { Comission } from 'src/app/core/models/comission.model';

@Pipe({
  name: 'comissionValue'
})
export class ComissionValuePipe implements PipeTransform {

  transform(comission: Comission): string {
    return `${comission.value}%`;
  }

}
