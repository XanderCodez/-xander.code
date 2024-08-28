document.getElementById("submit").onclick = function () {
   let coolName = document.getElementById("nameInput").value.trim();
   if (coolName) {
      document.getElementById("textHere").textContent = `welcome, ${coolName}!`;
      document.getElementById("msg").textContent = "";
      document.getElementById("error").textContent = "";
   } else {
      document.getElementById("error").textContent = "Type your name for magic!";
      document.getElementById("textHere").textContent = "";
      document.getElementById("msg").textContent = "";
   }
};
