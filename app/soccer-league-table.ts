import { DataMunging } from "@/data-munging";

interface TeamInfo {
  name: string;
  goalsFor: number;
  goalsAgainst: number;
}

export class SoccerLeagueTable extends DataMunging {
  teamInfos: TeamInfo[] = [];
  constructor(filename: string) {
    super(filename);
    this.parseTeamInfo();
  }

  private parseTeamInfo = () => {
    this.lines.forEach((line) => {
      const columns = this.getColumns(line);
      if (!isNaN(Number(columns[6])) && !isNaN(Number(columns[8]))) {
        const name = columns[1];
        const goalsFor = Number(columns[6]);
        const goalsAgainst = Number(columns[8]);
        this.teamInfos.push({ name, goalsFor, goalsAgainst });
      }
    });
  }

  private compareGoalDifference = (first: TeamInfo, second: TeamInfo) => {
    const firstCoalDifference = Math.abs(first.goalsFor - first.goalsAgainst);
    const secondCoalDifference = Math.abs(second.goalsFor - second.goalsAgainst);
    return this.compareNumber(firstCoalDifference, secondCoalDifference);
  }

  findTeamWithSmallestGoalDifference = (): TeamInfo => {
    return this.teamInfos.sort(this.compareGoalDifference)[0];
  }
}




