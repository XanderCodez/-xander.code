let coolName = document.getElementById("textHere");

document.getElementById("UpperCheck").onclick = () => {
   if (UpperCheck.checked) {
      coolName.textContent = coolName.textContent.toLocaleUpperCase();
   } else {
      coolName.textContent = coolName.textContent.toLocaleLowerCase();
   }
};

document.getElementById("BoldCheck").onclick = () => {
   if (BoldCheck.checked) {
      coolName.style.fontWeight = "Bolder";
   } else {
      coolName.style.fontWeight = "normal";
   }
};
