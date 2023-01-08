import { sheets_v4 } from 'googleapis';

export class RequestGoogleSheets implements sheets_v4.Params$Resource$Spreadsheets$Get {
  spreadsheetId: string;
  range: string;
  values?: string[][];

  constructor(props: Omit<RequestGoogleSheets, 'spreadsheetId' | 'range' | 'values'>) {
    Object.assign(this, props);
  }
}
