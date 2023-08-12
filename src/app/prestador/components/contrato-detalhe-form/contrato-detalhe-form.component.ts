import { Component, OnInit } from '@angular/core';
import { UnitContract } from 'src/app/core/models/unitContract.model';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contrato-detalhe-form',
  templateUrl: './contrato-detalhe-form.component.html',
  styleUrls: ['./contrato-detalhe-form.component.css']
})
export class ContratoDetalheFormComponent implements OnInit {

  isEditing = false;

  form = this.fb.group({
    title: [{ value: '', disabled: true }]
  });

  accordionActive = false;

  contract = {} as UnitContract;

  constructor(private fb: FormBuilder, private location: Location) {

  }

  ngOnInit(): void {
    const { contract } = this.location.getState() as any;
    this.contract = contract as UnitContract;
  }

  loadForm(): void {
    if (this.contract)
      this.form.setValue({
        title: this.contract.unit.title.value,
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
