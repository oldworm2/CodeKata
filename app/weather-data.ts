import { DataMunging } from "@/data-munging";

interface WeatherInfo {
  day: number
  maxTemperature: number
  minTemperature: number
}

export class WeatherData extends DataMunging {
  weatherInfos: WeatherInfo[] = [];
  constructor(filename: string) {
    super(filename);
    this.parseWeatherInfo();
  }

  private changeToNumber = (value: string): number => {
    return Number(value.replace('*', ''))
  }

  private parseWeatherInfo = () => {
    this.lines.shift(); // remove header(first line)
    this.lines.pop(); // remove summary(last line)
    this.weatherInfos = this.lines.map(line => {
      const [day, maxTemperature, minTemperature] = this.getColumns(line);
      return {
        day: Number(day),
        maxTemperature: this.changeToNumber(maxTemperature),
        minTemperature: this.changeToNumber(minTemperature),
      }
    });
  }

  private compareTemperatureSpread = (first: WeatherInfo, second: WeatherInfo): number => {
    const firstTemperatureSpread = first.maxTemperature - first.minTemperature;
    const secondTemperatureSpread = second.maxTemperature - second.minTemperature;
    return this.compareNumber(firstTemperatureSpread, secondTemperatureSpread);
  }

  findWeatherInfoWithSmallestTemperatureSpread = (): WeatherInfo => {
    return this.weatherInfos.sort(this.compareTemperatureSpread)[0];
  }
}
