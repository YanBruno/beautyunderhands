import { Pipe, PipeTransform } from '@angular/core';
import { UnitContract } from 'src/app/core/models/unitContract.model';

@Pipe({
  name: 'contractStatus'
})
export class ContractStatusPipe implements PipeTransform {

  transform(contract: UnitContract): string {
    return contract.isActive ? 'Ativo' : 'Desativo';
  }

}
