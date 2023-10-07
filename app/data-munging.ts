import * as fs from 'fs';

interface WeatherInfo {
  day: number
  maxTemperature: number
  minTemperature: number
}

const readDataFromFile = (filename: string): string[] => {
  const data = fs.readFileSync(filename, 'utf-8');
  return data.split('\n').filter((line) => line.trim().length > 0);
};

const changeToNumber = (value: string): number => {
  return parseInt(value.replace('*', ''))
}

const parseWeatherInfo = (data: string[]): WeatherInfo[] => {
  data.shift(); // remove header(first line)
  data.pop(); // remove summary(last line)
  return data.map(line => {
    const [day, maxTemperature, minTemperature] = line.split(/\s+/).filter(column => column);
    return {
      day: changeToNumber(day),
      maxTemperature: changeToNumber(maxTemperature),
      minTemperature: changeToNumber(minTemperature),
    }
  });
}

const compareTemperatureSpread = (first: WeatherInfo, second: WeatherInfo): number => {
  const firstTemperatureSpread = first.maxTemperature - first.minTemperature;
  const secondTemperatureSpread = second.maxTemperature - second.minTemperature;
  if (firstTemperatureSpread < secondTemperatureSpread) {
    return -1;
  } else if (firstTemperatureSpread > secondTemperatureSpread) {
    return 1;
  }
  return 0;
}

export const getWeatherInfoWithSmallestTemperatureSpread = (filename: string): WeatherInfo => {
  const weatherData = readDataFromFile(filename);
  const weatherInfos = parseWeatherInfo(weatherData);
  return weatherInfos.sort(compareTemperatureSpread)[0];
};
