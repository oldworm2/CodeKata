import fs from "fs";

export const readDataFromFile = (filename: string): string[] => {
  const data = fs.readFileSync(filename, 'utf-8');
  return data.split('\n').filter((line) => line.trim().length > 0);
};