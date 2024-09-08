document.getElementById("start").onclick = () => {
   let minNum = window.prompt("Add minimum value");

   let tries = 0;
   let answer;

   if (minNum !== null && minNum !== "" && !isNaN(minNum)) {
      let maxNum = prompt("Add maximum value").trim();
      if (maxNum !== null && maxNum !== "") {
         maxNum = Number(maxNum);
         minNum = Number(minNum);
         if (minNum >= maxNum) {
            alert("Add higher value to the Maximum and try again🔄");
            running = false;
         } else {
            answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
            Running = true;
         }
      }
      while (Running) {
         let guess = window.prompt(`Geuss a number between ${minNum} - ${maxNum}🤔`).trim();
         guess = Number(guess);
         if (isNaN(guess)) {
            alert("Pleas add a number❗");
         } else if (guess < minNum || guess > maxNum) {
            alert(`Pleas enter a number between ${minNum} - ${maxNum}❗`);
         } else {
            tries++;

            if (guess < answer) {
               alert("a bit higher⬆️");
            } else if (guess > answer) {
               alert("a bit lower⬇️");
            } else {
               let score = document.getElementById("score");
               document.getElementById("counter").textContent = `Tries: ${tries}`;
               document.getElementById("counter2").textContent = `Between ${minNum} to ${maxNum} `;
               Running = false;
               if (tries === 1) {
                  score.textContent = "IQ Level: 200📈";
                  alert(`Wow😮, you guessed it correctly on the first try!`);
               } else if (5 >= tries) {
                  score.textContent = "IQ Level: 100🤓";
                  alert(`${answer} is correct✅, it took you only ${tries} tries, thats fast💨!`);
               } else {
                  score.textContent = "IQ Level: XD";
                  alert(`${answer} is the Number, it took you ${tries} times`);
               }
            }
         }
      }
   } else {
      alert("Game canceld, try again⚠️");
      document.getElementById("gameCanceled").textContent = "Game Failed";
      document.getElementById("counter").textContent = "";
      document.getElementById("counter2").textContent = "";
      score.textContent = "";
      Running = false;
   }
};
