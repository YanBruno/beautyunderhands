import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Comission } from 'src/app/core/models/comission.model';
import { Location } from '@angular/common';

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

  comission = {} as Comission;

  constructor(private fb: FormBuilder, private location: Location) {

  }

  ngOnInit(): void {
    const { comission } = this.location.getState() as any;
    this.comission = comission as Comission;
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
