import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UnitContract } from 'src/app/core/models/unitContract.model';

@Component({
  selector: 'app-card-contract',
  templateUrl: './card-contract.component.html',
  styleUrls: ['./card-contract.component.css']
})
export class CardContractComponent implements OnInit, OnDestroy {
  @Input() contract: UnitContract | null = null;

  flipCard = false;
  form = this.fb.group({
    role: ['', Validators.compose([
      Validators.required
    ])]
  });

  /**
   *
   */
  constructor(private fb: FormBuilder) {


  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

  onFlipCard(): void {
    this.flipCard = !this.flipCard;
  }
}
