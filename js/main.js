"use strict";

const button = document.querySelector('button');
button.addEventListener('click',showMore);


function showMore() {
    let p = document.createElement("p");
    let content = document.createTextNode("This is more information about U of Windsor");
    p.appendChild(content);

    let article = document.querySelector("article");
    article.appendChild(p);
    button.removeEventListener('click',showMore);
}
let footer = document.querySelector("footer");
window.addEventListener('keydown', function(event) {
    this.console.log(event.key + " pressed");
    if (event.key=='b') {
        footer.style.background = "skyblue";
    }
})
window.addEventListener('keyup', event => {
    if (event.key=='b') {
        footer.style.background = "";
    }
})

let bar = document.querySelector("footer>div");
let lastX;
bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
        lastX = event.clientX;
        window.addEventListener("mousemove", moved);
        event.preventDefault();
    } 
})

function moved(event) {
    if (event.button==0) {
        window.removeEventListener("mousemove",moved);
    } else {
        let distance = event.clientX - lastX;
        let newWidth = bar.offsetWidth + distance;
        bar.style.width = newWidth + "px";
        lastX = event.clientX;
    }

}

let google = document.querySelector("section>a"); 
google.addEventListener("click", event => {
    console.log("Nope.");
    event.preventDefault();
})


let help =  document.querySelector("#help");
let inputs = document.querySelectorAll("input");
for (let input of Array.from(inputs)) {
    // console.log("test");
    input.addEventListener("focus", event => {
        let text = event.target.getAttribute("hint-help");
        help.textContent = text;
    })
    input.addEventListener("blur", event => {
        help.textContent="";
    })
}
