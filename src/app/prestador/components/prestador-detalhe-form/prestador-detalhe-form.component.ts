import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/core/models/provider.model';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-prestador-detalhe-form',
  templateUrl: './prestador-detalhe-form.component.html',
  styleUrls: ['./prestador-detalhe-form.component.css']
})
export class PrestadorDetalheFormComponent implements OnInit, OnDestroy {

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

  isEditing = false;
  contractAccordion = false;
  comissionAccordion = false;
  provider: Provider | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute
    , private providerService: ProviderService) {
  }
  ngOnInit(): void {
    this.getProvider();
  }
  ngOnDestroy(): void {

  }

  loadForm(): void {
    if (this.provider)
      this.form.setValue({
        id: this.provider.id,
        firstName: this.provider.name.firstName,
        lastName: this.provider.name.lastName,
        phone: this.provider.phone.number,
        email: this.provider.email.address,
        details: this.provider.details.value,
        createAt: this.provider.createAt
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



  getProvider(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.providerService.getProvider(id).subscribe({
      next: result => {
        this.provider = result;

        console.log(result);
      }
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

  openContractAccordion(): void {
    this.contractAccordion = !this.contractAccordion;
  }

  openComissionAccordion() {
    this.comissionAccordion = !this.comissionAccordion;
  }
}
