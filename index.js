let home = 0;
let away = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function addHomeScore(number) {
  home += number;
  homeScore.textContent = home;
}
function addAwayScore(number) {
  away += number;
  guestScore.textContent = away;
}
function resetScore() {
  home = 0;
  away = 0;
  homeScore.textContent = home;
  guestScore.textContent = away;
}