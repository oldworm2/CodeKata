import { readDataFromFile } from "@/file-utils";

interface TeamInfo {
  name: string;
  goalsFor: number;
  goalsAgainst: number;
}

const parseTeamInfo = (lines: string[]): TeamInfo[] => {
  const teamData: TeamInfo[] = [];

  lines.forEach((line) => {
    const columns = line.split(/\s+/);
    if (!isNaN(Number(columns[7])) && !isNaN(Number(columns[9]))) {
      const teamName = columns[2];
      const goalsFor = Number(columns[7]);
      const goalsAgainst = Number(columns[9]);
      teamData.push({ name: teamName, goalsFor, goalsAgainst });
    }
  });

  return teamData;
};

const compareGoalDifference = (first: TeamInfo, second: TeamInfo) => {
  const firstCoalDifference = Math.abs(first.goalsFor - first.goalsAgainst);
  const secondCoalDifference = Math.abs(second.goalsFor - second.goalsAgainst);
  if (firstCoalDifference < secondCoalDifference) {
    return -1;
  } else if (firstCoalDifference > secondCoalDifference) {
    return 1;
  }
  return 0;
};

export const findTeamWithSmallestGoalDifference = (filename: string): TeamInfo => {
  const footballData = readDataFromFile(filename);
  const teamInfos = parseTeamInfo(footballData);
  return teamInfos.sort(compareGoalDifference)[0];
};
