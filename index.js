// Write your code here!
const element = document.getElementById("main");
element.remove("main");

let newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");

newHeader.innerHTML = "<h1>YOUR-NAME is the champion</h1>";