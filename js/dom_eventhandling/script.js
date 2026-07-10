const heading = document.getElementById("hello")
const input = document.getElementById("search");
const button = document.getElementById("btn");

button.onclick=function(){
    let name = input.value;
    heading.innerText ="Hello,"+ name;
};

let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");

red.onclick = function (){
    red.style.backgroundColor ="red";
    red.style.color="white";
};

blue.onclick = function (){
    blue.style.backgroundColor ="blue";
        blue.style.color="white";

};

green.onclick = function (){
    green.style.backgroundColor ="green";
        green.style.color="white";

};

yellow.onclick = function (){
    yellow.style.backgroundColor = "yellow";
        yellow.style.color="white";

};