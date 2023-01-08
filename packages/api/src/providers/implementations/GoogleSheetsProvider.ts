import { google, GoogleApis, sheets_v4 } from 'googleapis';
import { IGoogleSheets } from '../IGoogleSheets';
import { GoogleAuth } from 'google-auth-library';

import path from 'path';

const auth: GoogleAuth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, '../../config/google/googleSheets.json'),
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});

export class GoogleSheetsProvider implements IGoogleSheets {
  private googleApis: GoogleApis;
  constructor() {
    this.googleApis = google;
  }
  async getSheetData(): Promise<sheets_v4.Sheets> {
    const client = await auth.getClient();
    return this.googleApis.sheets({ version: 'v4', auth: client });
  }
}
