document.getElementById("submit").onclick = () => {
   let coolName = document.getElementById("nameInput").value;
   coolName = coolName.trim().charAt(0).toUpperCase() + coolName.slice(1);
   if (coolName && !/^[0-9]+$/.test(coolName)) {
      document.getElementById("textHere").textContent = ` ${coolName}`;
      document.getElementById("msg").textContent = "Welcome!";
      document.getElementById("error").textContent = "";
      let size = 50;
      document.getElementById("increase").onclick = () => {
         size += 5;
         document.getElementById("textHere").style.fontSize = `${size}px`;
      };
      document.getElementById("decrease").onclick = () => {
         size -= 5;
         document.getElementById("textHere").style.fontSize = `${size}px`;
      };
      document.getElementById("reset").onclick = () => {
         size = 50;
         document.getElementById("textHere").style.fontSize = `${size}px`;
      };
      document.getElementById("clear").onclick = () => {
         document.getElementById("textHere").textContent = "";
         document.getElementById("msg").textContent = "Type another name";
      };
   } else if (/^[0-9]+$/.test(coolName)) {
      document.getElementById("textHere").textContent = "";
      document.getElementById("msg").textContent = "";
      document.getElementById("error").textContent = "Names can't be numbers!";
   } else {
      document.getElementById("error").textContent = "Please enter a name!";
      document.getElementById("textHere").textContent = "";
      document.getElementById("msg").textContent = "";
   }
};
