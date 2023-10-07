import { WeatherData } from "@/weather-data";
import { SoccerLeagueTable } from "@/soccer-league-table";

describe('Data Munging', () => {
  it('Weather Data - SmallestTemperatureSpread', () => {
    const weatherData = new WeatherData('./data/weather.dat');
    const weatherInfo = weatherData.findWeatherInfoWithSmallestTemperatureSpread();
    console.table(weatherInfo);
    expect(14).toBe(weatherInfo.day);
    expect(61).toBe(weatherInfo.maxTemperature);
    expect(59).toBe(weatherInfo.minTemperature);
  });

  it('Soccer League Table - SmallestGoalDifference', () => {
    const soccerLeagueTable = new SoccerLeagueTable('./data/football.dat');
    const teamInfo = soccerLeagueTable.findTeamWithSmallestGoalDifference();
    console.table(teamInfo);
    expect('Aston_Villa').toBe(teamInfo.name);
    expect(46).toBe(teamInfo.goalsFor);
    expect(47).toBe(teamInfo.goalsAgainst);
  });
})