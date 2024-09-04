let somethingLoop = document.getElementById("inputlooped");
let loopDuration = document.getElementById("loopNum");
let loopBtn = document.getElementById("loopBtn");
let loopedObjec = document.getElementById("loopedThing");
let clear = document.getElementById("loopCLear");

loopBtn.onclick = function () {
   let loopValue = somethingLoop.value;
   let Duration = loopDuration.value;
   for (i = 0; i <= Duration; i++) {
      loopedObjec.textContent += loopValue;
   }
};

clear.onclick = function () {
   document.getElementById("loopedThing").textContent = "";
};
