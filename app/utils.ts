import fs from "fs";

export const readDataFromFile = (filename: string): string[] => {
  const data = fs.readFileSync(filename, 'utf-8');
  return data.split('\n').filter((line) => line.trim().length > 0);
};

export const compareNumber = (a: number, b: number): number => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

export const getColumns = (line: string): string[] => {
  return line.split(/\s+/).filter(column => column);
}