document.getElementById("start").onclick = function () {
   let minNum = window.prompt("Add minimum value").trim();
   let running;
   let tries = 0;
   let answer;

   if (minNum !== null && minNum !== "" && !isNaN(minNum)) {
      let maxNum = prompt("Add maximum value").trim();
      if (maxNum !== null && maxNum !== "") {
         maxNum = Number(maxNum);
         minNum = Number(minNum);
         if (minNum >= maxNum) {
            alert("And higher value to the Maximum and try again");
            running = false;
         } else {
            answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
            running = true;
         }
      }
      while (running) {
         let guess = window.prompt(`Geuss a number between ${minNum} - ${maxNum}`);
         guess = Number(guess);
         if (isNaN(guess)) {
            alert("Pleas add a number!");
         } else if (guess < minNum || guess > maxNum) {
            alert(`Pleas enter a number between ${minNum} - ${maxNum}!`);
         } else {
            tries++;
            if (guess < answer) {
               alert("a bit higher!");
            } else if (guess > answer) {
               alert("a bit lower!");
            } else {
               running = false;
               if (tries === 1) {
                  alert(`Wow, you guessed it correctly on the first try!`);
               } else if (5 >= tries) {
                  alert(`${answer} is correct!, it took you only ${tries} tries, thats fast!`);
               } else {
                  alert(`${answer} is the Number, it took you ${tries} times`);
               }
            }
         }
      }
   } else {
      alert("Game canceld, try again!");
      running = false;
   }
};
