import { getWeatherInfoWithSmallestTemperatureSpread } from "@/data-munging";


describe('Data Munging', () => {
  it('SmallestTemperatureSpread', () => {
    const weatherInfo = getWeatherInfoWithSmallestTemperatureSpread('./data/weather.dat');
    expect(14).toBe(weatherInfo.day);
    expect(61).toBe(weatherInfo.maxTemperature);
    expect(59).toBe(weatherInfo.minTemperature);
  });
})