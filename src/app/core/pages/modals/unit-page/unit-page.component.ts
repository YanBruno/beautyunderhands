import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Unit } from 'src/app/core/models/unit.model';
import { UnitService } from 'src/app/core/services/unit.service';

@Component({
  selector: 'app-unit-page',
  templateUrl: './unit-page.component.html',
  styleUrls: ['./unit-page.component.css']
})
export class UnitPageComponent implements OnInit {

  form = this.fb.group({
    unit: ['', Validators.required]
  });

  units: Unit[] = []

  constructor(public unitService: UnitService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.unitService.getByProviderId().subscribe({
      next: result => {
        this.units = result;
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { unit } = this.form.value;
      this.unitService.setUnit(unit!);
    }
  }
}