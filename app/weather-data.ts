import { readDataFromFile } from "@/file-utils";

interface WeatherInfo {
  day: number
  maxTemperature: number
  minTemperature: number
}

const changeToNumber = (value: string): number => {
  return Number(value.replace('*', ''))
}

const parseWeatherInfo = (lines: string[]): WeatherInfo[] => {
  lines.shift(); // remove header(first line)
  lines.pop(); // remove summary(last line)
  return lines.map(line => {
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

export const findWeatherInfoWithSmallestTemperatureSpread = (filename: string): WeatherInfo => {
  const weatherData = readDataFromFile(filename);
  const weatherInfos = parseWeatherInfo(weatherData);
  return weatherInfos.sort(compareTemperatureSpread)[0];
};
