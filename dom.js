let a = document.querySelector("h1")
a.innerHTML="learning <i>dom </i>"
a.style.backgroundColor="purple";
console.log(a);


/*console.log("dom.js loaded");
function changeContent (){
    document.getElementById("example1").innerText=" this changes is done by innerText";
    document.getElementsByClassName("example")[0].textContent="this changes is done by textContent";
    console.log("Button clicked");*/


 let example1 = document.querySelector("#example1");
 example1.innerText="hey everyone."
 console.dir(example1);

let example2 = document.querySelector(".example2")
example2.innerHTML="hellow <b>swati</b>"
example2.style.color="red"
console.dir(example2);

let img =document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1780995173877-3c5d1c63fcdb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8");
console.log(img);

let link =document.querySelector("a")
link.getAttribute("herf");
console.log(link);

let remove=document.querySelector("#remove")
remove.removeAttribute("herf")
console.log(remove);

let shoping=document.querySelector(".shoping")
let ul=document.querySelector("ul")
let li=document.createElement("li")
li.textContent="new task";
ul.appendChild(li);
shoping.style.color="red"
console.log(shoping);


