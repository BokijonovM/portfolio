// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

const svgText = document.querySelectorAll("#svg-text path");
for (let i = 0; i < svgText.length; i++) {
  console.log(`Letter ${i} is ${svgText[i].getTotalLength()}`);
}
