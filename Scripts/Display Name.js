document.getElementById("submit").onclick = function () {
   let coolName = document.getElementById("nameInput").value.trim();
   if (coolName && !/^[0-9]+$/.test(coolName)) {
      document.getElementById("textHere").textContent = ` ${coolName}`;
      document.getElementById("msg").textContent = "Welcome!";
      document.getElementById("error").textContent = "";

      let size = 50;
      document.getElementById("increase").onclick = function () {
         size += 5;
         document.getElementById("textHere").style.fontSize = `${size}px`;
      };
      document.getElementById("decrease").onclick = function () {
         size -= 5;
         document.getElementById("textHere").style.fontSize = `${size}px`;
      };
      document.getElementById("reset").onclick = function () {
         size = 50;
         document.getElementById("textHere").style.fontSize = `${size}px`;
      };
      document.getElementById("clear").onclick = function () {
         document.getElementById("textHere").textContent = "";
         document.getElementById("msg").textContent = "Type another name";
      };
   } else if (/^[0-9]+$/.test(coolName)) {
      document.getElementById("textHere").textContent = "";
      document.getElementById("msg").textContent = "";
      document.getElementById("error").textContent = "Names can't be numbers!";
   } else {
      document.getElementById("error").textContent = "Type your name for magic!";
      document.getElementById("textHere").textContent = "";
      document.getElementById("msg").textContent = "";
   }
};
