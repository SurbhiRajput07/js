function changecontent (){
    document.getElementById(example1).innerText=" this changes is done by innerText";
    document.getElementsByClassName(example2).textContent="this changes is done by textContent";
}

let example = document.getElementById("example1");
//example.textContent="hey everyone."
console.dir(example);

let ex = document.getElementsByClassName("example2");
ex.innerText="hey everyone."
console.dir(ex);