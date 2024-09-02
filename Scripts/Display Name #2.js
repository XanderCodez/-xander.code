const submitBtn = document.getElementById("submit");

submitBtn.onclick = function () {
   let coolName = document.getElementById("nameInput").value.trim();
   const mainText = document.getElementById("textHere");
   const Msg = document.getElementById("msg");
   const Error = document.getElementById("error");
   const sizeInc = document.getElementById("increase");
   const sizeDec = document.getElementById("decrease");
   const resetBtn = document.getElementById("reset");
   const clearBtn = document.getElementById("clear");

   if (coolName && !/^[0-9]+$/.test(coolName)) {
      mainText.textContent = ` ${coolName}`;
      Msg.textContent = "Welcome!";
      Error.textContent = "";

      let size = 50;

      sizeInc.onclick = function () {
         size += 5;
         mainText.style.fontSize = `${size}px`;
      };
      sizeDec.onclick = function () {
         size -= 5;
         mainText.style.fontSize = `${size}px`;
      };
      resetBtn.onclick = function () {
         size = 50;
         mainText.style.fontSize = `${size}px`;
      };
      clearBtn.onclick = function () {
         mainText.textContent = "";
         Msg.textContent = "Type another name";
         Error.textContent = "";
      };
   } else if (/^[0-9]+$/.test(coolName)) {
      mainText.textContent = "";
      Msg.textContent = "";
      Error.textContent = "Names can't be numbers!";
   } else {
      mainText.textContent = "";
      Msg.textContent = "";
      Error.textContent = "Please enter a name!";
   }
};
