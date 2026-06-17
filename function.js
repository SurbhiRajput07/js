//1.difference between function declaration and expression. 
/*surbhi("SURBHI","RAJPUT");

function surbhi (name,surname){
          console.log(name,surname);
}


//2.
//name();    
//name("SONAM" ,"RAJPUT");       //referncerror : can't access before initialization

let name= function (name,surname){
    console.log(name,surname);
}
//name("SONAM" ,"RAJPUT");

//3.
greet ();

function greet(){
    console.log("hello!");
}

// 4.  convert into arrow function.

let multiply =function (a,b,c,d) {      //a ,b,c,d, are parameter and 2 and 8 are argument.
    return a*b;                          //a=2,b=8 and remaining are undefined.
                                //...rest opretar it creat array.
};
return(2,8);
console.log(multiply);*/

//5.use rest parameter to accept any number of score and return the total.

// function val(...num) {
//     let total=0;
//     num.forEach(function(val){
//         total=total+val;
//     })
//     return total;
// }
// console.log(val(44,57,96,32,100,54));

//6.early return function

// function  checkage(age){
//     if(age<18) return "too toung";
//     else return "allowed";
// }
// console.log(checkage(17));

// function outer(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
//     };
// }
// const counter = outer();
//  counter(); 
//  counter();



//  let arr=[10,45,0,3,76,10,36]

//  let arr1= arr.map(function (val) {
//     if(val>10) return val;
//     else return "";
    
//  });
//  console.log(arr1);



//  let arr=[10,45,0,3,76,10,36]

//  let arr1= arr.map(function (val) {
//     return val>10;
    
//  });
//  console.log(arr1);


// let arr=[10,45,0,3,76,10,36]

//   let arr1= arr.filter(function (val) {
//      return val>10;
 
//   });
//   console.log(arr1);
 
// let fruit =["apple","banana","mango"]

// fruit[1]="kiwi";
// //console.log(fruit[1]);
// fruit.splice(2,0,"xyz","abc");
// let fruit1= fruit.splice(2,1)
// //let fruit1=fruit.slice([2]);
// console.log(fruit1);
// console.log(fruit);


let arr=[2,5,33,44,7]
let newarr=[]
arr.forEach(function(val){
    newarr.push(val*val);
  
});
console.log(newarr);

// let arr=[2,5,33,44,7]
//  let arr1= arr.map(function(val){
//     return val*val;
// });
// console.log(arr1);