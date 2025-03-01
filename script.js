var root = document.querySelector(":root");
var themeNameBox //= document.getElementById("theme");

window.onload = function() {
    themeNameBox = document.getElementById("theme");
}

function colorSet(color, accentColor, tertiaryColor1, themeName) {
    root.style.setProperty('--pickedColor', color);
    root.style.setProperty('--accentColor', accentColor);
    root.style.setProperty('--tertiaryColor1', tertiaryColor1);
    themeNameBox.textContent = themeName;
}