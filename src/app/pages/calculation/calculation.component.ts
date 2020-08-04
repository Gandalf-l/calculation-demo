import {Component, OnInit} from '@angular/core';
import {ICalculationEntry} from '@shared/interfaces/calculation-entry';
import {CollectionViewer} from '@angular/cdk/collections';
import {Observable, of} from 'rxjs';

export class FunkyDataSource{
  constructor(private mockPriceComponents: string[]) {
  }

  private data: ICalculationEntry[] = [
    {
      rowIndex: 0,
      internal: true,
      type: '',
      text: 'Allgemeine Rechnung',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 1,
      internal: false,
      type: '',
      text: 'Allgemeine Rechnung 2',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 2,
      internal: true,
      type: 'U',
      text: 'Allgemeine Rechnung 3',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 3,
      internal: false,
      type: '',
      text: 'Allgemeine Rechnung 2',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 4,
      internal: false,
      type: '',
      text: 'Allgemeine Rechnung 2',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 5,
      internal: false,
      type: '',
      text: 'Allgemeine Rechnung 2',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 6,
      internal: false,
      type: '',
      text: 'Allgemeine Rechnung 2',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 7,
      internal: false,
      type: '',
      text: 'Allgemeine Rechnung 2',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 8,
      internal: false,
      type: '',
      text: 'Allgemeine Rechnung 2',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 9,
      internal: false,
      type: '',
      text: 'Allgemeine Rechnung 2',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0,
    },
    {
      rowIndex: 10,
      internal: false,
      type: '',
      text: 'Allgemeine Rechnung 2',
      formula: '4+5',
      factor: 0,
      divisor: 0,
      labourHours: 0,
      labourTotal: 0,
      priceComponents: {},
      sum: 0
    }
  ];

  connect(): Observable<ICalculationEntry[]>{
    this.mockPriceComponents.forEach(priceComp => {
      this.data.forEach(entry => (entry.priceComponents[priceComp] = ''));
    });

    return of(this.data);
  }

  disconnect(): void {
  }
}

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {
  mockPriceComponents = ['Maerial', 'Lohn', 'Geräte', 'Nachunternehmer'];
  public rowsData: Observable<ICalculationEntry[]>;
  public displayedColumnsNames: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.displayedColumnsNames = [
      '',
      'i',
      'k',
      'text',
      'formula',
      'factor',
      'divisor',
      'labourHours',
      'labourTotal',
      ...this.mockPriceComponents.map(pc => `pc_${pc}`),
      'sum'
    ];
    this.rowsData = new FunkyDataSource(this.mockPriceComponents).connect();
  }


}
