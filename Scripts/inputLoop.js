document.getElementById("loopBtn").onclick = () => {
   let loopValue = document.getElementById("inputlooped").value;
   let Duration = document.getElementById("loopNum").value;
   for (i = 0; i <= Duration; i++) {
      document.getElementById("loopedThing").textContent += loopValue;
   }
};

document.getElementById("loopCLear").onclick = () => {
   document.getElementById("loopedThing").textContent = "";
};
