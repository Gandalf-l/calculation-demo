import {Component, Input, OnInit} from '@angular/core';
import {ICalculationEntry} from '@shared/interfaces/calculation-entry';
import {FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-calculation-row',
  templateUrl: './calculation-row.component.html',
  styleUrls: ['./calculation-row.component.scss']
})
export class CalculationRowComponent implements OnInit {

  @Input()
  public rowDataJson: ICalculationEntry;

  public rowData: any[][];
  public rowForm: FormArray = new FormArray([]);
  qwe: any = true;

  constructor() {

  }

  ngOnInit(): void {
    this.rowData = Object.entries(this.rowDataJson);
    this.rowData = this.rowData.slice(0, -2).concat(Object.entries(this.rowData.slice(-2)[0][1]), this.rowData.slice(-1));
    for (const data of this.rowData) {
      this.rowForm.push(new FormControl(data));
    }
    console.log(123, this.rowData.slice(-2));
    console.log(2, this.rowForm.value);
    // for (const cell of Object.values(this.rowData)) {
    //   // console.log(cell);
    // }
    // console.log(Object.values(this.rowData));
  }

  public isNan(data: any): any {
    if (!isNaN(data) && data !== '') {
      console.log(data);
      return data.toFixed(3);
    } else {
      return data;
    }
  }
}
