import {Component, Input, OnInit} from '@angular/core';
import {ICalculationEntry} from '@shared/interfaces/calculation-entry';

@Component({
  selector: 'app-calculation-row',
  templateUrl: './calculation-row.component.html',
  styleUrls: ['./calculation-row.component.scss']
})
export class CalculationRowComponent implements OnInit {

  @Input()
  public rowDataJson: ICalculationEntry;

  public rowData: any[][];
  public activate: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.rowData = Object.entries(this.rowDataJson);
    this.rowData = this.rowData.slice(0, -2).concat(Object.entries(this.rowData.slice(-2)[0][1]), this.rowData.slice(-1));
    console.log(123, this.rowData.slice(-2));
    this.activate = this.rowData[2][1] === 'U';
  }

  public onTypeChange(): void {
    this.activate = this.rowData[2][1] === 'U';
  }

  public onNumberChange(index: any): void {
    if (!isNaN(this.rowData[index][1])) {
      console.log(index, this.rowData[index][1]);
      this.rowData[index][1] = Math.round(this.rowData[index][1] * 1000) / 1000;
    }
    console.log(123, this.rowData[index][1]);
  }
}
