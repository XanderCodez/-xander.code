// used jQuery
// used Switches (Line: 154)
// used 1 Object to store all variables

let gameData = {
   totalGames: 0,
   totalPoints: 0,
   triesDisplay: $("#TriesDisplay"),
   totalPointsDisplay: $("#TotalPointsDisplay"),
   statusMsgDisplay: $("#GameStatusMessage"),
   difficultyDisplay: $("#DifficultyDisplay"),
   rankDisplay: $("#RankDisplay")
};

$("#start").click(() => {
   const MIN_VALUE = Number($("#minValueInput").val());
   const MAX_VALUE = Number($("#maxValueInput").val());
   const MAXIMUM_TRIES = Number($("#TryAmount").val());

   let consumedTries = 0;
   let targetNumber;
   let gameRunning;

   if (MAX_VALUE !== null && MAX_VALUE !== "" && MAX_VALUE !== 0) {
      if (MAXIMUM_TRIES !== null && MAXIMUM_TRIES !== "" && MAXIMUM_TRIES !== 0) {
         if (MIN_VALUE !== MAX_VALUE && MAX_VALUE > MIN_VALUE) {
            gameRunning = true;

            gameData.statusMsgDisplay.text("");

            targetNumber = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;

            console.log(`Minmum ${MIN_VALUE}`);
            console.log(`Maximum ${MAX_VALUE}`);
            console.log(`Max Tries ${MAXIMUM_TRIES}`);
            console.log(`Target Number: ${targetNumber}`);
         } else {
            alert("Add higher value to the Maximum and try again🔄");
            gameRunning = false; // !Game Exit
         }
      } else {
         alert("Add Tries!");
         gameRunning = false; // !Game Exit
      }

      while (gameRunning) {
         let guess = window.prompt(`Guess a number between ${MIN_VALUE} - ${MAX_VALUE}🤔`);
         guess = Number(guess);
         if (isNaN(guess)) {
            alert("Please add a number❗");
         } else if (guess < MIN_VALUE || guess > MAX_VALUE) {
            alert(`Please enter a number between ${MIN_VALUE} - ${MAX_VALUE}❗`);
         } else {
            consumedTries++;

            let remainingTries = MAXIMUM_TRIES - consumedTries;

            console.log(`Remaining tries: ${remainingTries}`);
            console.log(`Tries Used ${consumedTries}`);

            if (consumedTries <= MAXIMUM_TRIES) {
               if (guess < targetNumber) {
                  alert(`Above ${guess}, remaining tries: ${remainingTries}`);
               } else if (guess > targetNumber) {
                  alert(`Below ${guess}, remaining tries: ${remainingTries}`);
               } else {
                  if (consumedTries === 1) {
                     gameData.triesDisplay.text(`Wow, it only took you once!, between ${MIN_VALUE} - ${MAX_VALUE}`);
                  } else {
                     gameData.triesDisplay.text(`${targetNumber} is the correct number, ${consumedTries} Tries between ${MIN_VALUE} - ${MAX_VALUE}`);
                  }
                  gameRunning = false; // !Game Exit

                  gameData.totalGames++;
                  gameData.totalPoints++;
                  gameData.statusMsgDisplay.text("");
                  $("#TotalGamesDisplay").text(`Games Played: ${gameData.totalGames}`);

                  //* Range difference between Max and Min (D = 10 ,C = 50, B = 100, A = 250)
                  //* Base point for each range (D = 1, C = 2, B = 4, A = 6)
                  //* Extras, Each Range gets starts at base to 1

                  //Range A
                  if (MAX_VALUE - MIN_VALUE >= 250) {
                     gameData.totalPoints += 6;
                     if (consumedTries === 1) {
                        gameData.totalPoints += 6;
                        gameData.totalPointsDisplay.text(`Extra Points: 6, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Impossible");
                     } else if (consumedTries <= 5) {
                        gameData.totalPoints += 5;
                        gameData.totalPointsDisplay.text(`Extra Points: 5, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Impossible");
                     } else if (consumedTries <= 10) {
                        gameData.totalPoints += 4;
                        gameData.totalPointsDisplay.text(`Extra Points: 4, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Nightmare");
                     } else if (consumedTries <= 15) {
                        gameData.totalPoints += 3;
                        gameData.totalPointsDisplay.text(`Extra Points: 3, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Nightmare");
                     } else if (consumedTries <= 20) {
                        gameData.totalPoints += 2;
                        gameData.totalPointsDisplay.text(`Extra Points: 2, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Brutal");
                     } else {
                        gameData.totalPointsDisplay.text(`Extra Points: 0, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Brutal");
                     }

                     //Range B
                  } else if (MAX_VALUE - MIN_VALUE >= 100) {
                     gameData.totalPoints += 4;
                     if (consumedTries === 1) {
                        gameData.totalPoints += 4;
                        gameData.totalPointsDisplay.text(`Extra Points: 4, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Insane");
                     } else if (consumedTries <= 5) {
                        gameData.totalPoints += 3;
                        gameData.totalPointsDisplay.text(`Extra Points: 3, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Extreme");
                     } else if (consumedTries <= 10) {
                        gameData.totalPoints += 2;
                        gameData.totalPointsDisplay.text(`Extra Points: 2, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Very Hard");
                     } else {
                        gameData.totalPointsDisplay.text(`Extra Points: 0, Total Points ${gameData.totalPoints}`);
                     }

                     //Range C
                  } else if (MAX_VALUE - MIN_VALUE >= 50) {
                     gameData.totalPoints += 2;
                     if (consumedTries === 1) {
                        gameData.totalPoints += 2;
                        gameData.totalPointsDisplay.text(`Extra Points: 2, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Hard");
                     } else if (consumedTries <= 5) {
                        gameData.totalPoints += 1;
                        gameData.totalPointsDisplay.text(`Extra Points: 1, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Medium");
                     } else {
                        gameData.totalPointsDisplay.text(`Extra Points: 0, Total Points ${gameData.totalPoints}`);
                        gameData.difficultyDisplay.text("Difficulty: Easy");
                     }

                     //Range D
                  } else {
                     gameData.totalPointsDisplay.text(`Extra Points: 0, Total Points ${gameData.totalPoints}`);
                     gameData.difficultyDisplay.text("Difficulty: Too Easy!");
                  }

                  //? Ranking system: Beginner, Novice, Intermediate, Challenger, Adept, Expert, Master, Grandmaster, Legendary, Unstoppable

                  switch (true) {
                     case gameData.totalPoints >= 100:
                        gameData.rankDisplay.text("Unstoppable");
                        break;
                     case gameData.totalPoints >= 90:
                        gameData.rankDisplay.text("Legendary");
                        break;
                     case gameData.totalPoints >= 80:
                        gameData.rankDisplay.text("Grandmaster");
                        break;
                     case gameData.totalPoints >= 70:
                        gameData.rankDisplay.text("Master");
                        break;
                     case gameData.totalPoints >= 60:
                        gameData.rankDisplay.text("Expert");
                        break;
                     case gameData.totalPoints >= 50:
                        gameData.rankDisplay.text("Adept");
                        break;
                     case gameData.totalPoints >= 40:
                        gameData.rankDisplay.text("Challenger");
                        break;
                     case gameData.totalPoints >= 30:
                        gameData.rankDisplay.text("Intermediate");
                        break;
                     case gameData.totalPoints >= 20:
                        gameData.rankDisplay.text("Novice");
                        break;
                     case gameData.totalPoints >= 10:
                        gameData.rankDisplay.text("Beginner");
                        break;
                     default:
                        gameData.statusMsgDisplay.text(`You need 10 points or more to rank, Current Points: ${gameData.totalPoints}`);
                  }
               }
            } else {
               gameData.triesDisplay.text(`Maximum Limit Reached: ${MAXIMUM_TRIES}, Number was ${targetNumber}`);
               gameData.totalPointsDisplay.text(`Points: ${gameData.totalPoints}`);

               gameRunning = false; // !Game Exit
            }
         }
      }
   } else {
      alert("Something wrong , try again⚠️");

      gameData.triesDisplay.text("");
      gameData.totalPointsDisplay.text("");
      gameData.statusMsgDisplay.text("Game Failed");

      gameRunning = false; // !Game Exit
   }
});
