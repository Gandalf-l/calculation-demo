export interface ICalculationEntry {
  rowIndex?: number;
  internal?: boolean;
  type?: string;
  text?: string;
  formula?: string;
  factor?: number;
  divisor?: number;
  labourHours?: number;
  labourTotal?: number;
  priceComponents?: { [component: string]: string };
  sum?: number;
}
