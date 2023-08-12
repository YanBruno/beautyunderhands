import { Pipe, PipeTransform } from '@angular/core';
import { Role } from 'src/app/core/models/role.model';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(role: Role): string {
    return `${role.id} - ${role.details}`;
  }

}
