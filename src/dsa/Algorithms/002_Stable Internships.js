// A company has hired N interns to each join one of N different teams. Each intern has ranked their preferences for which teams they wish to join, 
// and each team has ranked their preferences for which interns they prefer.

// Given these preferences, assign 1 intern to each team. These assignments should be "stable," meaning that there is no unmatched pair of an intern 
// and a team such that both that intern and that team would prefer they be matched with each other.

// In the case there are multiple valid stable matchings, the solution that is most optimal for the interns should be chosen 
// (i.e. every intern should be matched with the best team possible for them).

// Your function should take in 2 2-dimensional lists, one for interns and one for teams. Each inner list represents a single intern or team's preferences, 
// ranked from most preferable to least preferable. These lists will always be of length N, with integers as elements. 
// Each of these integers corresponds to the index of the team/intern being ranked. 
// Your function should return a 2-dimensional list of matchings in no particular order. Each matching should be in the format [internindex, teamIndex].


// time O(n^2) | space O(n^2)

function stableInternships(interns, teams) {
  const chosenInterns = {};
  const freeInterns = interns.map((_, i) => i);
  const currentInternChoices = new Array(interns.length).fill(0);
  const teamMaps = [];
  for(let team of teams) {
    const rank = {};
    team.forEach((internNum, i) => {
      rank[internNum] = i;
    });
    teamMaps.push(rank);
  }
  while(freeInterns.length > 0) {
    const internNum = freeInterns.pop();
    const intern = interns[internNum];
    const teamPreference = intern[currentInternChoices[internNum]];
    currentInternChoices[internNum]++;
    if(!(teamPreference in chosenInterns)) {
      chosenInterns[teamPreference] = internNum;
      continue;
    }
    const previousIntern = chosenInterns[teamPreference];
    const previousInternRank = teamMaps[teamPreference][previousIntern];
    const currentInternRank = teamMaps[teamPreference][internNum];
    if(currentInternRank < previousInternRank) {
      freeInterns.push(previousIntern);
      chosenInterns[teamPreference] = internNum;
    } else {
      freeInterns.push(internNum);
    }
  }
  const matches = Object.entries(chosenInterns).map(([teamNum, internNum]) => [internNum, parseInt(teamNum),]);
  return matches;
}
