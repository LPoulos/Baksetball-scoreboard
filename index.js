let home = 0;
let away = 0;
let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

function addHomeScore(number) {
  home += number;
  homeScore.textContent = home;
}
function addAwayScore(number) {
  away += number;
  awayScore.textContent = away;
}
function resetScore() {
  home = 0;
  away = 0;
  homeScore.textContent = home;
  awayScore.textContent = away;
}