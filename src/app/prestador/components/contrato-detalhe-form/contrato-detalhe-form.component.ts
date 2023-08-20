import { Component, OnDestroy, OnInit } from '@angular/core';
import { UnitContract } from 'src/app/core/models/unitContract.model';
import { FormBuilder } from '@angular/forms';
import { Comission } from 'src/app/core/models/comission.model';
import { ProviderService } from '../../services/provider.service';
import { Subscription, first } from 'rxjs';
import { ContractService } from 'src/app/core/services/contract.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contrato-detalhe-form',
  templateUrl: './contrato-detalhe-form.component.html',
  styleUrls: ['./contrato-detalhe-form.component.css']
})
export class ContratoDetalheFormComponent implements OnInit, OnDestroy {

  isEditing = false;

  form = this.fb.group({
    title: [{ value: '', disabled: true }]
  });

  comissions: Comission[] = [];
  contract: UnitContract | null = null;
  sub: Subscription[] = [];

  constructor(private fb: FormBuilder, private providerService: ProviderService, private contractService: ContractService, private location: Location) { }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {

    this.getCurrentContract();

    this.sub.push(
      this.contractService.hasContractContext.subscribe({
        next: result => {
          if (result) {
            this.providerService.setCurrentContract();
          }
        }
      })
    );

  }

  loadForm(): void {
    if (this.contract)
      this.form.setValue({
        title: this.contract.unit.title.value,
      });
  }

  getCurrentContract(): void {
    this.sub.push(
      this.providerService.currentContract.subscribe({
        next: contract => {
          if (contract) {
            this.contract = contract;

            this.providerService.currentComissions.pipe(first()).subscribe({
              next: comissions => {
                if (comissions)
                  this.comissions = comissions
              }
            });
          }

          if (!contract)
            this.location.back();
        }
      })
    );
  }

  clearForm(): void {
    this.form.setValue({
      title: ''
    });
  }

  onEditing(): void {
    this.loadForm();
    this.isEditing = true;
  }

  onNotEditing(): void {
    this.clearForm();
    this.isEditing = false;
  }

  onUpdate(): void {
    const { valid, value } = this.form;
    this.onNotEditing();
  }
}
