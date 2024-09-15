// used jQuery

$("#submit").click(() => {
   let coolName = $("#nameInput").val().trim();
   coolName = coolName.charAt(0).toUpperCase() + coolName.slice(1);

   let size = 50;

   if (coolName && !/^[0-9]+$/.test(coolName)) {
      $("#textHere").text(coolName);
      $("#msg").text("Welcome!");
      $("#error").text("");

      $("#increase").click(() => {
         size += 5;
         $("#textHere").css("font-size", `${size}px`);
      });

      $("#decrease").click(() => {
         size -= 5;
         $("#textHere").css("font-size", `${size}px`);
      });

      $("#reset").click(() => {
         size = 50;
         $("#textHere").css("font-size", `${size}px`);
      });

      $("#clear").click(() => {
         $("#textHere").text("");
         $("#msg").text("Type another name");
      });
   } else if (/^[0-9]+$/.test(coolName)) {
      $("#textHere").text("");
      $("#msg").text("");
      $("#error").text("Names can't be numbers!");
   } else {
      $("#error").text("Please enter a name!");
      $("#textHere").text("");
      $("#msg").text("");
   }

   $("#UpperCheck").click(function () {
      if ($(this).is(":checked")) {
         $("#textHere").text($("#textHere").text().toUpperCase());
      } else {
         $("#textHere").text($("#textHere").text().toLowerCase());
      }
   });

   $("#BoldCheck").click(function () {
      if ($(this).is(":checked")) {
         $("#textHere").css("font-weight", "bold");
      } else {
         $("#textHere").css("font-weight", "normal");
      }
   });
});
