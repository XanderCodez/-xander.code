let somethingLoop = document.getElementById("inputlooped");
let loopedObjec = document.getElementById("loopedThing");
let loopDuration = document.getElementById("loopNum");
let loopBtn = document.getElementById("loopBtn");

const CLEAR = document.getElementById("loopCLear");

loopBtn.onclick = () => {
   let loopValue = somethingLoop.value;
   let Duration = loopDuration.value;
   for (i = 0; i <= Duration; i++) {
      loopedObjec.textContent += loopValue;
   }
};

CLEAR.onclick = () => {
   document.getElementById("loopedThing").textContent = "";
};
