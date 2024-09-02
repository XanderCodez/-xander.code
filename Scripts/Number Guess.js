// need to make sure that it exists when Max is lower than Min

document.getElementById("start").onclick = function () {
   let minNum = window.prompt("Add min number");
   let running;
   let tries = 0;
   let answer;

   if (minNum !== null && minNum !== "") {
      let maxNum = prompt("add max number");
      if (maxNum !== null && maxNum !== "") {
         running = true;
         answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
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
               alert(`Correct!, the answer is ${answer}, it took you ${tries} times`);
               running = false;
            }
         }
      }
   } else {
      running = false;
   }
};
//  need to exist the the whole game if
//  press Ok on an empty value in Min and then Max Or pressed Cancel
