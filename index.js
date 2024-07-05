// Write your code here!
const element = document.getElementById("main");
element.remove("main");

let newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");

newHeader.innerHTML = "<h1>Abel is the champion</h1>";