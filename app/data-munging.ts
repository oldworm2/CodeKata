import fs from "fs";

export class DataMunging {
  lines: string[]
  constructor(filename: string) {
    this.lines = this.readDataFromFile(filename);
  }

  readDataFromFile(filename: string): string[] {
    const data = fs.readFileSync(filename, 'utf-8');
    return data.split('\n').filter((line) => line.trim().length > 0);
  }

  compareNumber = (a: number, b: number): number => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  }

  getColumns = (line: string): string[] => {
    return line.split(/\s+/).filter(column => column);
  }

}