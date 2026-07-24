let homeScore = 0
let guestScore = 0
let homePoints = document.getElementById("homePoints")
let guestPoints = document.getElementById("guestPoints")
let restartText = document.getElementById("restartText")

function addHomePoint() {
  homeScore += 1
  homePoints.textContent = homeScore
      restartText.textContent = ""
}

function addTwoPoint() {
 homeScore += 2
  homePoints.textContent = homeScore
      restartText.textContent = ""
}

function addThreePoint() {
  homeScore += 3
  homePoints.textContent = homeScore
      restartText.textContent = ""
}

function guestOnePoint() {
  guestScore += 1
  guestPoints.textContent = guestScore
      restartText.textContent = ""
}

function guestTwoPoint() {
  guestScore += 2
  guestPoints.textContent = guestScore
      restartText.textContent = ""
}

function guestThreePoint() {
  guestScore += 3
  guestPoints.textContent = guestScore
  restartText.textContent = ""
}

function restartFunction() {
  guestScore = 0
  homeScore = 0
  guestPoints.textContent = guestScore
  homePoints.textContent = homeScore
  restartText.textContent = "Game restarted!"
}
