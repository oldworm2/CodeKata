import { findWeatherInfoWithSmallestTemperatureSpread } from "@/weather-data";
import { findTeamWithSmallestGoalDifference } from "@/soccer-league-table";


describe('Data Munging', () => {
  it('Weather Data - SmallestTemperatureSpread', () => {
    const weatherInfo = findWeatherInfoWithSmallestTemperatureSpread('./data/weather.dat');
    expect(14).toBe(weatherInfo.day);
    expect(61).toBe(weatherInfo.maxTemperature);
    expect(59).toBe(weatherInfo.minTemperature);
  });

  it('Soccer League Table - SmallestGoalDifference', () => {
    const teamInfo = findTeamWithSmallestGoalDifference('./data/football.dat');
    expect('Aston_Villa').toBe(teamInfo.name);
    expect(46).toBe(teamInfo.goalsFor);
    expect(47).toBe(teamInfo.goalsAgainst);
  });
})