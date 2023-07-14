import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { MessageService } from 'src/app/core/services/message.service';
import { Router } from '@angular/router';
import { CreatePerson } from 'src/app/core/models/create-person.model';

@Component({
  selector: 'app-cliente-novo-page',
  templateUrl: './cliente-novo-page.component.html',
  styleUrls: ['./cliente-novo-page.component.css']
})
export class ClienteNovoPageComponent {

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
    phoneNumber: ['', Validators.compose([
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ])],
    emailAddress: ['', Validators.compose([
      Validators.email
    ])],
    details: [''],
    password: ['', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8)
    ])]
  });

  constructor(
    private service: ClienteService
    , private fb: FormBuilder
    , private messageService: MessageService
    , private route: Router
  ) { }

  ngOnInit(): void {

  }

  onSave(): void {
    const { valid, value } = this.form;

    if (valid) {
      const cliente = value as CreatePerson;

      console.log(value as CreatePerson);

      this.service.createCustomer(cliente).subscribe({
        next: result => {
          this.messageService.addFromResult(result);
          if (result.success)
            this.route.navigate(['/clientes']);
        }
      });
    }
  }
}
