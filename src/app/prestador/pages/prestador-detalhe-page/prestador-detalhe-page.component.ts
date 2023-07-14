import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/core/models/provider.model';
import { ProviderService } from 'src/app/prestador/services/provider.service';

@Component({
  selector: 'app-prestador-detalhe-page',
  templateUrl: './prestador-detalhe-page.component.html',
  styleUrls: ['./prestador-detalhe-page.component.css']
})
export class PrestadorDetalhePageComponent implements OnInit {

  provider: Provider | null = null;
  isEditing = true;
  form = this.fb.group({
    id: [{ value: '', disabled: true }],
    firstName: [''],
    lastName: [''],
    phone: [''],
    email: [''],
    details: ['']
  });

  constructor(
    private route: ActivatedRoute
    , private providerService: ProviderService
    , private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getProvider();
  }

  getProvider(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.providerService.getProvider(id).subscribe({
      next: result => {
        this.provider = result;


        this.form.setValue({
          id: result.id,
          firstName: result.name.firstName,
          lastName: result.name.lastName,
          phone: result.phone.number,
          email: result.email.address,
          details: result.details.value
        });
      }
    });
  }


  isUpdate(): void {
    const { valid, value } = this.form;
    console.log(valid, value);

  }
}
