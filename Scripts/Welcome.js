function Greet() {
   let name = prompt("What is your name?");
   if (name != null && name.trim()) {
      alert(`Welcome, ${name}🫡`);
   } else {
      alert("Welcome anyway 🙂 ");
   }
}
