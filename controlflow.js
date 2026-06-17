// if(3==="3"){
//     console.log(true)
// }
// else{
//     console.log(false)
// };
//  
// const score = 200
// if (score>300){
//     const win ="winner"
//     console.log(win)
//     // console.log(`user win: ${win}`);
// }
//  else{
//      console.log("loser");
//  }
//  console.log(`user win: ${win}`);  // because let is block scope.

// const balance = 1000

// if(balance>500) console.log("safe");   //implicite scope (;)

//multiple loop

// const balance = 1000
// if(balance<500){
//      console.log("less than 500");
// }
// else if(balance<700){
//     console.log("less than 700");
// }
// else{
//     console.log("more than 500");
// }
//   const username ="surbhi"
  
//   if(username){
//     console.log("got user email");
//   } else{
//     console.log("not found");
//   }

// let num = 10
// if(num%2==0){
//      console.log("even number");
// }else{
//     console.log("odd num");
// }

// let num1 = 2
// if(num1<2){
//     console.log("prime");
// }else if(num1==2){
//     console.log("prime");
// }
//  else if(num1%2&&num!==0){
//     console.log("prime number");
// }else{
//     console.log("not a prime");
// }
//  (function item()
//  {
//      var num =10
//      const num =() =>{}
//      let num = 30
//      console.log(num);
//  })
//  console.log(num);


// const userloggedin =true
// const bebitcard =true
// const cash = true
// if(userloggedin&&bebitcard){
//     console.log("offer");
// }
// else if(userloggedin && bebitcard|| cash){
//     console.log("elligible");
// }
// else{
//     console.log("nonelligible");
// }

// for(i=0; i<=3;i++){
//      setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

//  arr=[1,2,3]
//   arr[arr.length-1]++;
//  console.log(arr);

//++++++++++++++++++++++++++++++++switch case+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let grade ='b';

// switch(grade){
//     case'a':
//     console.log("excellent");
//     break;
//     case'b':
//     console.log("good job");
//      break;
//     case'c':
//     console.log("passed");
//       break;
//     default:
//         console.log("unknown");
// }

// let grade =2;

// switch(grade){
//     case"2":
//     console.log("excellent");
//     break;
//     case'2':
//     console.log("good job");
//      break;
//     case 2:
//     console.log("passed");
//       break;
//     default:
//         console.log("unknown");
// }
// let day= "monday";

// switch(day){
//     case "monday":
//         case "tuesday":
//             case "friday":
//                 console.log("weekday class");
//             break;
//     case "saturday":
//         case "sunday":
//             console.log("weekend workshop");
//             break;
//     default:
//         console.log("invalid day");
// }

// let a=[]
// if(a.length===0)
// {
//     console.log("empty array")
// }

// let b=" "
// if(b.length===0)
// {
//     console.log("empty string")
// }else{
//     console.log("b")
// }
// let c=""
// if(c.length===0)
// {
//     console.log("string")
// }

// let d=function(){}
// if(d.length===0)
// {
//     console.log("function")
// }

// const arr =[1,2,3];

//  for(let index=0;index < array.length;index++){
//      const element=array[index];
//      console.log(element);
// }
// for(let i=0;i < 10;i++){
//          const element= i;
//          if (element==5){
//             console.log("5 is best number")
//          }//else{
//             //console.log("not equal to 5")
//          //}
//          console.log(element);
//  }
     
// for (let i = 0;i <10;i++) {
//     const element = i;
//     console.log(element);
//     for (let j = 0; j < 11; j++) {
//         const element2 = j;
//         console.log(element2)
//     }
// }
// for (let i = 0;i <10;i++) {
//     const element = i;
//     console.log(element);
//     for (let j = 0; j < 10; j++) {
//         const element2 = j;
//         console.log( )
//     }
// }

// let price = prompt("type a number");
// if(price<=30){
//     console.log("cone");
// }else if (price <=40){
//     console.log("strawbarray");
// }else{
//     console.log("another");
// }
// let price = Number(prompt("type a number"));
// if(price===30){
//     console.log("cone");
// }else if (price ===40){
//     console.log("strawbarray");
// }else{
//     console.log("another");
// }
// 

//+++++++++++++++++++++++++++++++++++++++loops+++++++++++++++++++++++

//  for(let i =0; i<10;i++){
//  console.log("i am on the way")
//  //console.log(Math.random());  //it generate random number.
//  }

// let i = 0;
// console.log(i++);  //i++ increment in next step.
// console.log(i);   
// console.log(i++);
// console.log(i);

// let y=0;
// console.log(++y);  //++i increment in that particular step.
// console.log(y);  
// console.log(++y);
// console.log(y);


// let i=0;
// while (i<10) {
//     console.log("learning js");

//     ++i;  //if we not use this condition loop is running unlimited times.
// }

// let i=10;

// do {
//     console.log("hello everyone");
//     ++i;
// } while (i=10);


let numsum =0;
 for(i=0;i<=100;i++){
     numsum=numsum+i;
    }
    console.log(numsum);


// for(i=1;i<=30;i++){
//     if(i%3==0){
//         console.log(i);
//     }
// }
   

// let x=10;
// while(x>=1){
//     console.log(x);
//     x--;
// }


// let n=prompt("type a number");
// for(i=1;i<=n;i++){
//     if(i%2===0){
//         console.log("even",n);
//     }else{
//         console.log("odd",n);
//     }
// }

// for (let i = 1; i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//     }
// }

// for(i=1;i<=100;i++){
//     if(i<7){
//         console.log(i);
       
//     }
//     if(i%7===0){
//         console.log(i);
//         break;
//     }
// }

//skip the mutiple of 3.

// for(i=1;i<=20;i++){
//     if(i%3!==0){
//         console.log(i);
//         continue;
//     }
// }
