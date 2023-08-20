import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Comission } from 'src/app/core/models/comission.model';
import { Location } from '@angular/common';
import { ProviderService } from '../../services/provider.service';
import { first } from 'rxjs';
import { ContractService } from 'src/app/core/services/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comissao-detalhe-form',
  templateUrl: './comissao-detalhe-form.component.html',
  styleUrls: ['./comissao-detalhe-form.component.css']
})
export class ComissaoDetalheFormComponent {

  isEditing = false;

  form = this.fb.group({
    title: [{ value: '', disabled: true }]
  });

  comission: Comission | null = null;

  constructor(private fb: FormBuilder, private location: Location, private providerService: ProviderService, private contractService: ContractService) {

  }

  ngOnInit(): void {
    this.providerService.currentComission.subscribe({
      next: comission => {
        if (comission)
          this.comission = comission;

        if (!comission)
          this.location.back();
      }
    });
  }

  loadForm(): void {
    if (this.comission)
      this.form.setValue({
        title: this.comission.service.unit.title.value,
      });
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
