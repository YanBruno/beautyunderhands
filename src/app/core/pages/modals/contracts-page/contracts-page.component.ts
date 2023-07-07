import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UnitContract } from 'src/app/core/models/unitContract.model';
import { ContractContextService } from 'src/app/core/services/contract-context.service';
import { ContractService } from 'src/app/core/services/contract.service';

@Component({
  selector: 'app-contracts-page',
  templateUrl: './contracts-page.component.html',
  styleUrls: ['./contracts-page.component.css']
})
export class ContractsPageComponent implements OnInit, OnDestroy {

  form = this.fb.group({
    idx: [0, Validators.required]
  });

  contracts: UnitContract[] = [];
  showModal = false;

  private sub = new Subscription();

  constructor(
    private fb: FormBuilder,
    public contractContextService: ContractContextService,
    private contractService: ContractService
  ) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.contractContextService.isShowModal.subscribe({
      next: result => {

        if (result)
          this.contractService.getContracts().subscribe({
            next: result => {
              this.contracts = result;
            }
          });

        this.showModal = result;
      }
      , error: (err) => { }
    });
  }

  onSubmit() {
    if (this.form.valid) {

      const { idx } = this.form.value
      const contract = this.contracts[idx as number];

      this.contractService.updatePrincipalContract(contract).subscribe({
        next: result => {
          this.contractContextService.handlerContractContext(result);
        }
      });
    }
  }

  onClose(): void {
    this.contractContextService.hideModal();
  }
}