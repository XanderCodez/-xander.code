//* any permanent data need to be globally scoped, because it resets when the game ends.

let gameStats = {
   totalGames: 0,
   totalPoints: 0,
   totalRank: document.getElementById("RankDisplay")
};

let tryDiplay = document.getElementById("TriesDisplay");
let totalGamesDisplay = document.getElementById("TotalGamesDisplay");
let totalPointsDisplay = document.getElementById("TotalPointsDisplay");
let gameStatusMessage = document.getElementById("GameStatusMessage");
let difficultyDisplay = document.getElementById("DifficultyDisplay");

document.getElementById("start").onclick = () => {
   const MIN_VALUE = Number(document.getElementById("minValueInput").value);
   const MAX_VALUE = Number(document.getElementById("maxValueInput").value);

   const MAXIMUM_TRIES = document.getElementById("TryAmount").value;

   let consumedTries = 0;
   let targetNumber;
   let Running;

   if (MIN_VALUE !== null && MIN_VALUE !== "" && MAX_VALUE !== null && MAX_VALUE !== "") {
      if (MAXIMUM_TRIES !== null && MAXIMUM_TRIES !== "") {
         if (MIN_VALUE >= MAX_VALUE) {
            alert("Add higher value to the Maximum and try again🔄");
            Running = false;
         } else {
            targetNumber = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;

            console.log(`MIN_VALUE ${MIN_VALUE}`);
            console.log(`MAX_VALUE ${MAX_VALUE}`);
            console.log(`MAXIMUM_TRIES ${MAXIMUM_TRIES}`);
            console.log(`targetNumber ${targetNumber}`);

            //! To break the loop if the Values missed up
            if (targetNumber > MAX_VALUE || targetNumber < MIN_VALUE) {
               Running = false;
            } else {
               Running = true;
            }
         }
      } else {
         alert("Add Maximum Tries and try again🔄");
         Running = false;
      }

      while (Running) {
         let guess = window.prompt(`Geuss a number between ${MIN_VALUE} - ${MAX_VALUE}🤔`);
         guess = Number(guess);
         if (isNaN(guess)) {
            alert("Pleas add a number❗");
         } else if (guess < MIN_VALUE || guess > MAX_VALUE) {
            alert(`Pleas enter a number between ${MIN_VALUE} - ${MAX_VALUE}❗`);
         } else {
            consumedTries++;
            console.log(`consumedTries ${consumedTries}`);
            if (consumedTries <= MAXIMUM_TRIES) {
               if (guess < targetNumber) {
                  alert("a bit higher⬆️");
               } else if (guess > targetNumber) {
                  alert("a bit lower⬇️");
               } else {
                  if (consumedTries === 2) {
                     tryDiplay.textContent = ` ${consumedTries} Tries between ${MIN_VALUE} - ${MAX_VALUE}`;
                  } else {
                     tryDiplay.textContent = `Wow, it only took you once!, between ${MIN_VALUE} - ${MAX_VALUE}`;
                  }
                  gameStats.totalGames++;
                  gameStats.totalPoints++;
                  totalGamesDisplay.textContent = `Games Played: ${gameStats.totalGames}`;
                  gameStatusMessage.textContent = "";
                  Running = false;

                  //* Range diffrence between Max and Min (10 , 50, 100, 250)
                  //* each one (1try, tries <= 5, tries <= 10)
                  //* extras: (16, 10) : (8, 4) : (3, 2) : (2, 1)

                  if (MAX_VALUE - MIN_VALUE >= 250) {
                     if (consumedTries === 1) {
                        gameStats.totalPoints += 16;
                        totalPointsDisplay.textContent = `Extra Points: 16!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Impossible";
                     } else if (consumedTries <= 5) {
                        gameStats.totalPoints += 10;
                        totalPointsDisplay.textContent = `Extra Points: 10!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Nightmare";
                     } else {
                        totalPointsDisplay.textContent = `Extra Points: 0, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Brutal";
                     }
                  } else if (MAX_VALUE - MIN_VALUE >= 100) {
                     if (consumedTries === 1) {
                        gameStats.totalPoints += 8;
                        totalPointsDisplay.textContent = `Extra Points: 8!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Insane";
                     } else if (consumedTries <= 5) {
                        gameStats.totalPoints += 4;
                        totalPointsDisplay.textContent = `Extra Points: 4!, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Extreme";
                     } else {
                        totalPointsDisplay.textContent = `Extra Points: 0, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Very Hard";
                     }
                  } else if (MAX_VALUE - MIN_VALUE >= 50) {
                     if (consumedTries === 1) {
                        gameStats.totalPoints += 3;
                        totalPointsDisplay.textContent = `Extra Points: 3, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Hard";
                     } else if (consumedTries <= 5) {
                        gameStats.totalPoints += 2;
                        totalPointsDisplay.textContent = `Extra Points: 2, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Medium";
                     } else {
                        totalPointsDisplay.textContent = `Extra Points: 0, Total Points ${gameStats.totalPoints}`;
                        difficultyDisplay.textContent = "Difficulty: Easy";
                     }
                  } else {
                     totalPointsDisplay.textContent = `Extra Points: 0, Total Points ${gameStats.totalPoints}`;
                     difficultyDisplay.textContent = "Difficulty: Too Easy!";
                  }
               }
            } else {
               tryDiplay.textContent = `Maximum Tries Limit Reached: ${MAXIMUM_TRIES} `;
               totalPointsDisplay.textContent = `Points: ${gameStats.totalPoints}`;

               Running = false;
            }
         }
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
         gameStats.totalRank.textContent = "Need At least 10 or more Points ";
      }
   } else {
      alert("Something wrong , try again⚠️");

      tryDiplay.textContent = "";
      totalPointsDisplay.textContent = "";
      gameStatusMessage.textContent = "Game Failed";

      Running = false;
   }
};
