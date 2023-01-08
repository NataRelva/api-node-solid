import { sheets_v4 } from 'googleapis';

export interface IRange {
  startRow: number;
  endRow: number;
  sheet?: string;
}

export interface IGoogleSheets {
  getSheetData(): Promise<sheets_v4.Sheets>;
}
