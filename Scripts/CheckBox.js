let coolName = document.getElementById("textHere");
let upCheckBtn = document.getElementById("UpperCheck");
let BoldcheckBtn = document.getElementById("BoldCheck");

upCheckBtn.onclick = function () {
   if (upCheckBtn.checked) {
      coolName.textContent = coolName.textContent.toLocaleUpperCase();
   } else {
      coolName.textContent = coolName.textContent.toLocaleLowerCase();
   }
};

BoldcheckBtn.onclick = function () {
   if (BoldcheckBtn.checked) {
      coolName.style.fontWeight = "Bolder";
   } else {
      coolName.style.fontWeight = "normal";
   }
};
