import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/core/models/customer.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-detalhe-page',
  templateUrl: './cliente-detalhe-page.component.html',
  styleUrls: ['./cliente-detalhe-page.component.css']
})
export class ClienteDetalhePageComponent implements OnInit {

  cliente: Customer | null = null;

  isEditing = false;

  form = this.fb.group({
    id: [{ value: '', disabled: true }],
    firstName: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ])],
    lastName: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ])],
    phone: ['', Validators.compose([
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ])],
    email: ['', Validators.compose([
      Validators.email
    ])],
    details: [''],
    createAt: [{ value: '', disabled: true }]
  });

  constructor(
    private route: ActivatedRoute
    , private service: ClienteService
    , private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getcliente();
  }

  getcliente(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.service.getCustomer(id).subscribe({
      next: result => {
        this.cliente = result;
      }
    });
  }

  loadForm(): void {
    if (this.cliente)
      this.form.setValue({
        id: this.cliente.id,
        firstName: this.cliente.name.firstName,
        lastName: this.cliente.name.lastName,
        phone: this.cliente.phone.number,
        email: this.cliente.email.address,
        details: this.cliente.details.value,
        createAt: this.cliente.createAt
      });
  }

  clearForm(): void {
    this.form.setValue({
      id: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      details: '',
      createAt: '',
    });
  }

  onUpdate(): void {
    const { valid, value } = this.form;


    this.onNotEditing();
  }

  onEditing(): void {
    this.loadForm();
    this.isEditing = true;
  }

  onNotEditing(): void {
    this.clearForm();
    this.isEditing = false;
  }
}
