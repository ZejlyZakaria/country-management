import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportCsvService {

  constructor() { }

  exportToCsv(data: any[], fileName: string, headers: { id: string, title: string }[]) {
    const csvData = this.convertToCSV(data, headers);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private convertToCSV(data: any[], headers: { id: string, title: string }[]) {
    const headerRow = headers.map(header => header.title);
    const csv = [
      headerRow.join(','),
      ...data.map(row => headers.map(header => row[header.id]).join(','))
    ].join('\n');
    return csv;
  }
}
