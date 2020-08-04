import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CalculationRoutingModule} from './calculation-routing.module';
import {CalculationComponent} from './calculation.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {CalculationRowComponent} from './calculation-row/calculation-row.component';


@NgModule({
  declarations: [CalculationComponent, CalculationRowComponent],
  imports: [
    CommonModule,
    CalculationRoutingModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class CalculationModule {
}
