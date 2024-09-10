//* any permanent data need to be globally scoped, because it resets when the game ends.

let gameStats = {
   totalGames: 0,
   totalPoints: 0,
   totalRank: document.getElementById("RankDisplay"),
   basePointDisplay: document.getElementById("BasePointsDisplay")
};

let tryDiplay = document.getElementById("TriesDisplay");
let totalGamesDisplay = document.getElementById("TotalGamesDisplay");
let totalPointsDisplay = document.getElementById("TotalPointsDisplay");
let gameStatusMessage = document.getElementById("GameStatusMessage");
let difficultyDisplay = document.getElementById("DifficultyDisplay");

document.getElementById("start").onclick = () => {
   const MIN_VALUE = Number(document.getElementById("minValueInput").value);
   const MAX_VALUE = Number(document.getElementById("maxValueInput").value);
   const MAXIMUM_TRIES = Number(document.getElementById("TryAmount").value);

   let consumedTries = 0;
   let targetNumber;
   let gameRunning;

   if (MIN_VALUE != null && MIN_VALUE !== "" && MAX_VALUE !== null && MAX_VALUE !== "" && MAX_VALUE !== 0) {
      if (MAXIMUM_TRIES !== null && MAXIMUM_TRIES !== "" && MAXIMUM_TRIES !== 0) {
         if (MIN_VALUE >= MAX_VALUE) {
            alert("Add higher value to the Maximum and try again🔄");
            gameRunning = false;
         } else {
            targetNumber = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;

            gameStatusMessage.textContent = "";

            console.log(`Minmum ${MIN_VALUE}`);
            console.log(`Maximum ${MAX_VALUE}`);
            console.log(`Max Tries ${MAXIMUM_TRIES}`);
            console.log(`Target Number: ${targetNumber}`);

            gameRunning = true;
         }
      } else {
         alert("Add Tries!");
         gameRunning = false;
      }

      while (gameRunning) {
         let guess = window.prompt(`Geuss a number between ${MIN_VALUE} - ${MAX_VALUE}🤔`);
         guess = Number(guess);
         if (isNaN(guess)) {
            alert("Pleas add a number❗");
         } else if (guess < MIN_VALUE || guess > MAX_VALUE) {
            alert(`Pleas enter a number between ${MIN_VALUE} - ${MAX_VALUE}❗`);
         } else {
            consumedTries++;
            let remainingTires = MAXIMUM_TRIES - consumedTries;

            console.log(`Remaining tries: ${remainingTires}`);
            console.log(`Tries Used ${consumedTries}`);

            if (consumedTries <= MAXIMUM_TRIES) {
               if (guess < targetNumber) {
                  alert(`a bit higher ⬆️, remaining tries: ${remainingTires}`);
               } else if (guess > targetNumber) {
                  alert(`a bit lower ⬇️, remaining tries: ${remainingTires}`);
               } else {
                  if (consumedTries === 1) {
                     tryDiplay.textContent = `Wow, it only took you once!, between ${MIN_VALUE} - ${MAX_VALUE}`;
                  } else {
                     tryDiplay.textContent = `${targetNumber} is the correct number, ${consumedTries} Tries between ${MIN_VALUE} - ${MAX_VALUE}`;
                  }
                  gameStats.totalGames++;
                  gameStats.totalPoints++;
                  totalGamesDisplay.textContent = `Games Played: ${gameStats.totalGames}`;
                  gameStatusMessage.textContent = "";

                  gameRunning = false;

                  //* Range diffrence between Max and Min (D = 10 ,C = 50, B = 100, A = 250)
                  //* Base point for each range (D = 1, C = 2, B = 4, A = 6)
                  //* Extras, Each Range get multipled from base => 2

                  //Range A
                  if (MAX_VALUE - MIN_VALUE >= 250) {
                     gameStats.totalPoints += 6;
                     if (consumedTries === 1) {
                        gameStats.totalPoints *= 6;
                        totalPointsDisplay.textContent = `Extra Points: 6X!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Impossible";
                     } else if (consumedTries <= 5) {
                        gameStats.totalPoints *= 5;
                        totalPointsDisplay.textContent = `Extra Points: 5X!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Impossible";
                     } else if (consumedTries <= 10) {
                        gameStats.totalPoints *= 4;
                        totalPointsDisplay.textContent = `Extra Points: 4X!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Nightmare";
                     } else if (consumedTries <= 15) {
                        gameStats.totalPoints *= 3;
                        totalPointsDisplay.textContent = `Extra Points: 3X!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Nightmare";
                     } else if (consumedTries <= 15) {
                        gameStats.totalPoints *= 2;
                        totalPointsDisplay.textContent = `Extra Points: 2X!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Brutal";
                     } else {
                        totalPointsDisplay.textContent = `Extra Points: 0, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Brutal";
                     }

                     //Range B
                  } else if (MAX_VALUE - MIN_VALUE >= 100) {
                     gameStats.totalPoints += 4;
                     if (consumedTries === 1) {
                        gameStats.totalPoints *= 4;
                        totalPointsDisplay.textContent = `Extra Points: 4X!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Insane";
                     } else if (consumedTries <= 5) {
                        gameStats.totalPoints *= 3;
                        totalPointsDisplay.textContent = `Extra Points: 3X!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Extreme";
                     } else if (consumedTries <= 10) {
                        gameStats.totalPoints *= 2;
                        totalPointsDisplay.textContent = `Extra Points: 2X!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Very Hard";
                     } else {
                        totalPointsDisplay.textContent = `Extra Points: 0, Total Points ${gameStats.totalPoints}`;
                     }

                     //Range C
                  } else if (MAX_VALUE - MIN_VALUE >= 50) {
                     gameStats.totalGames += 2;
                     if (consumedTries === 1) {
                        gameStats.totalPoints *= 2;
                        totalPointsDisplay.textContent = `Extra Points: 2X!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Hard";
                     } else if (consumedTries <= 5) {
                        gameStats.totalGames += 1;
                        totalPointsDisplay.textContent = `Extra Points: 1, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Medium";
                     } else {
                        totalPointsDisplay.textContent = `Extra Points: 0, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Easy";
                     }

                     //Range D
                  } else {
                     totalPointsDisplay.textContent = `Extra Points: 0, Total Points ${gameStats.totalPoints}`;
                     difficultyDisplay.textContent = "Difficulty: Too Easy!";
                  }

                  //? Ranking system: Beginner, Novice, Intermediate, Challenger, Adept, Expert, Master, Grandmaster, Legendary, Unstoppable

                  if (gameStats.totalPoints >= 100) {
                     gameStats.totalRank.textContent = "Unstoppable";
                  } else if (gameStats.totalPoints >= 90) {
                     gameStats.totalRank.textContent = "Legendary";
                  } else if (gameStats.totalPoints >= 80) {
                     gameStats.totalRank.textContent = "Grandmaster";
                  } else if (gameStats.totalPoints >= 70) {
                     gameStats.totalRank.textContent = "Master";
                  } else if (gameStats.totalPoints >= 60) {
                     gameStats.totalRank.textContent = "Expert";
                  } else if (gameStats.totalPoints >= 50) {
                     gameStats.totalRank.textContent = "Adept";
                  } else if (gameStats.totalPoints >= 40) {
                     gameStats.totalRank.textContent = "Challenger";
                  } else if (gameStats.totalPoints >= 30) {
                     gameStats.totalRank.textContent = "Intermediate";
                  } else if (gameStats.totalPoints >= 20) {
                     gameStats.totalRank.textContent = "Novice";
                  } else if (gameStats.totalPoints >= 10) {
                     gameStats.totalRank.textContent = "Beginner";
                  } else {
                     gameStatusMessage.textContent = `You need 10 points or more to rank, Current Points: ${gameStats.totalPoints}`;
                  }
               }
            } else {
               tryDiplay.textContent = `Maximum Limit Reached: ${MAXIMUM_TRIES}, Number was ${targetNumber} `;
               totalPointsDisplay.textContent = `Points: ${gameStats.totalPoints}`;

               gameRunning = false;
            }
         }
      }
   } else {
      alert("Something wrong , try again⚠️");

      tryDiplay.textContent = "";
      totalPointsDisplay.textContent = "";
      gameStatusMessage.textContent = "Game Failed";

      gameRunning = false;
   }
};
