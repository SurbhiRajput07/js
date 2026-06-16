// for(let i =1;i<11;++i){
//     console.log(i);

// }
//2.print even number from 1 to 100

// for(let i=1;i<=100;i++){
//    if(i%2===0){
//     console.log(i)
//    }
// }
 //print the largest of 3 number.

     //3.check if a number is positive ,negative or zero
// let num=0;
// if(1<=num){
//     console.log("positive");
// }
// else if(num==0){
//     console.log("zero");
// }else {
//     console.log("negative");
// }

  //4.find the sum of the digits

//   let num=[2,4,5,6,7,9];
//   let sum =0;
//   for(i=0;i<num.length;i++){
//     sum+=num[i];
//   }
//   console.log(sum);

//5.count the digits in a number
//***********************************************
// let num1=465783;
// let numsum =[];
// while (num1>0) {
//     let lastDigit=num1%10;
//     num1.push(lastDigit);
//     num1=Math.floor(num1/10);
// }
// console.log(numsum);
    //6.find largest of three number.
// let num1=45;   num2=75; num3=84;
// if(num1>num2&&num1>num3){
//     console.log(num1+"largest");
// }else if(num2>num3){
//     console.log(num2+"largest");
// }else{
//     console.log(num3+"largest");
// }

//7. find sum of even and odd from 1 to 100

// let evensum=0;
// let oddsum=0;

// for(i=1;i<=100;i++){
//     if(i%2===0){
//         evensum+=i;
//     }else{
//         oddsum+=i;
//     }
// }
// console.log(evensum);
// console.log(oddsum);



// let num="299763735";
//  let evensum=0;
//  let oddsum=0;
//  for(let i=0;i<num.length;i++){
// let digit =Number(num[i]);

//      if(digit%2===0){
//          evensum+=digit;
//          console.log("even sum",evensum);
//           }else{
//       oddsum+=digit;
//        console.log("odd sum",oddsum);
//     }
//  }

// +++++++++++++++++++++++++++quize question++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //1. 
/*if(0){
  console.log('yes');       //0 is falsy value so it return no
}else{
  console.log('no');
}
//2.
let x=5;
if(x>3 &&x>10){console.log('in range');   //&& both case must be true 
}else {
  console.log('not in range');
}

//3.
let o=5;
if(o>3 ||o>10){console.log('in range');   //|| condition  must be true 

}else {
  console.log('not in range');
}
//4.
if([]){
  console.log('truthy');        //[] is a truthy value
}else {
  console.log('falsy');
}

//5.
let a=null;
if(a){
  console.log('yes');        //null is a falsy value
}else {
  console.log('no');
}

//6.
let y =10;
if (y=5)
  console.log(y);
 
//7.
if(false){
  console.log('hello')  // false and 0 is a falsy value so else code is running
}else if(0){
  console.log('hey')
}else{
  console.log('hi')
}
//8.
let s='5';
if (s==5){
  console.log('equal');
}else{
  console.log('not equal');
}

//9.
let q='5';
if (q===5){
  console.log('equal');
}else{
  console.log('not equal');
}

//10.
let t=1>2? 's' : 1<2? 't' :'u';
  console.log('t');

//11.
let score =85;
let grade=score >=90? 'a':score>=80?'b':'c';     //? ternary operator check condition.
  console.log(grade);

//12.  
   function getval(val){
 if(val>0) return 'pos';
   else return 'neg';
} 
console.log(getval(12));

//13. write a function getgrade(score) that take a student's marke (0 to 100);
     //return the grade based on this logic

     function getgrade(score){
        if(score>=90 && score<=100) return 'a+'
        if(score>=70 && score<=90) return 'a'
        if(score>=50 && score<=70) return 'b'
        if(score<=30) return 'fail'
    }
    console.log(getgrade(20));*/

    //14.
    //let x=6;
    // switch(x){
    //   case 2:
    //     console.log("two");
    //     break;
    //     case3:
    //     console.log("three");
    //     break;
    //     default:
    //     console.log("default");
    // }

    //15. for loop

//   for(let i=0;i<=10;i++){
//     if (i%2==0){
//     console.log("even",i);
//   }else{
//     console.log("odd",i);
//   }
// }

//16.while loop

// let x=0;
// while(x<30){
//   if(x=2 && x%2===0){
//     console.log("prime",x);
//   }else{
//     console.log("not a prime",x);
//   }
//   x++;
// }


for(i=1;i<=5;i++){
       let row="";
  for(j=1;j=5-i+1;j++){
      row+=j;
        
        }
     console.log(row);
 }
