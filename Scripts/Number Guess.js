document.getElementById("start").onclick = function () {
   const minNum = prompt("add min number");
   const maxNum = prompt("add max number");

   let answer = Math.floor(Math.random() * (maxNum - minNum + 1));
   let trys = 0;
   let running = true;

   while (running) {
      let guess = window.prompt(`Geuss a number between ${minNum} - ${maxNum}`);
      guess = Number(guess);
      if (isNaN(guess)) {
         alert("Pleas add a number!");
      } else if (guess < minNum || guess > maxNum) {
         alert(`Pleas enter a number between ${minNum} - ${maxNum}!`);
      } else {
         trys++;
         if (guess < answer) {
            alert("a bit higher!");
         } else if (guess > answer) {
            alert("a bit lower!");
         } else {
            alert(`Correct!, the answer is ${answer}, it took you ${trys} times`);
            running = false;
         }
      }
   }
};
