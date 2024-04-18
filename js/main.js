"use strict";

const pTagWithButton = document.querySelector('#withButton');
pTagWithButton.addEventListener('click',function(){
    console.log("Hello from p tag");
})
const button = document.querySelector('#showMoreBtn');
button.addEventListener('click',event => 
 {  
    event.stopPropagation();
    let p = document.createElement("p");
    let content = document.createTextNode("This is more information about U of Windsor");
    p.appendChild(content);

    let article = document.querySelector("article");
    article.appendChild(p);
});

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


const form = document.querySelector("#infoForm");
form.addEventListener("submit", event => {
    let nameValue = document.querySelector("#name").value;
    if (nameValue == null ||  nameValue=="" || nameValue==" ") {
        help.textContent="You must fill Name input box";
        event.preventDefault();
    }


} )
const section = document.querySelector("section.content");

section.addEventListener('click', event => {
    // console.log("you clicked somewhere on the section");
    if (event.target.nodeName == "BUTTON") {
        if (event.target.textContent == "A") {
            section.style.background = "lightgreen";
        }
        console.log("Clicked" , event.target.textContent)
    }
})