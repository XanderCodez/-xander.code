let darkBtn = document.getElementById("darkTheme");
let lightBtn = document.getElementById("lightTheme");
let themeSheet = document.getElementById("ThemeStyles");

darkBtn.onclick = () => {
   themeSheet.setAttribute("href", "Styles/Style-Dark.css");
};

lightBtn.onclick = () => {
   themeSheet.setAttribute("href", "Styles/Style-Light.css");
};
