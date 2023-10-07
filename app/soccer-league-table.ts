import { compareNumber, getColumns, readDataFromFile } from "@/utils";

interface TeamInfo {
  name: string;
  goalsFor: number;
  goalsAgainst: number;
}

const parseTeamInfo = (lines: string[]): TeamInfo[] => {
  const teamInfos: TeamInfo[] = [];

  lines.forEach((line) => {
    const columns = getColumns(line);
    if (!isNaN(Number(columns[6])) && !isNaN(Number(columns[8]))) {
      const name = columns[1];
      const goalsFor = Number(columns[6]);
      const goalsAgainst = Number(columns[8]);
      teamInfos.push({ name, goalsFor, goalsAgainst });
    }
  });

  return teamInfos;
};

const compareGoalDifference = (first: TeamInfo, second: TeamInfo) => {
  const firstCoalDifference = Math.abs(first.goalsFor - first.goalsAgainst);
  const secondCoalDifference = Math.abs(second.goalsFor - second.goalsAgainst);
  return compareNumber(firstCoalDifference, secondCoalDifference);
};

export const findTeamWithSmallestGoalDifference = (filename: string): TeamInfo => {
  const footballData = readDataFromFile(filename);
  const teamInfos = parseTeamInfo(footballData);
  return teamInfos.sort(compareGoalDifference)[0];
};
