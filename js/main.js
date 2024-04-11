"use strict";
let node = document.querySelector("section>h1");
node.className = "brown";
node.classList.add("box")
console.log(node.classList);
node.classList.remove("box")

node.textContent= "Web Development Class";

let h2 = document.createElement("h3");
let content = document.createTextNode("Course STEC 7102-001");

h2.appendChild(content);
let node_section = document.querySelector("section.content");
console.log(node_section);
node_section.appendChild(h2);




