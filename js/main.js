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
