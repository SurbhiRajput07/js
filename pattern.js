//1.
// let n=5;
// for(i=1;i<=n;i++){
//   let row="";
//   for(j=1;j<=n;j++){
//     row+="*";
//   };
//   console.log(row);
// }

// //5.
// for(let i=1;i<=5;i++){
//   let row="";
//   for(let j=1;j<=n-i+1;j++){
//     row+=j;
//   }
//   console.log(row);
// }

// //7. pyradime 

/*let y=5;
 for(let i=1;i<=y;i++){
   let row="";
   for(let j=1;j<=y-i-+1;j++){
     row+=" ";
   }
   for(s=1;s<=2*i-1;s++){
     row+="*";
   }
   console.log(row);
 } */


//8.downward pyramide

/*let z=3;
for( let i=1;i<=z;i++){
  let row="";
  for(let j=1;j<i;j++){
    row+=" ";
  }
  for( let s=1;s<=2*(z-i)+1;s++){
    row+="*";
  }
  console.log(row);
}*/

//9. diamond patttern

/*let n=3;
for( let i=1;i<=n;i++){
  let row="";
  for(let j=1;j<=n-i;j++){
    row+=" ";
  }
  for( let s=1;s<=2*i-1;s++){
    row+="*";
  }
  console.log(row);
}
  for(k=1;k<=n;k++){
    let row1="";
    for(l=1;l<=k;l++){
      row1+=" ";
    };
    for(m=1;m<=2*n-2*k-1;m++){
      row1+="*";
    };
    console.log(row1);
  }*/


  //10 well

// let n=5;
//  for(i=1;i<=n;i++){
//   let row="";
//   for(j=1;j<=i;j++){
//     row+=j;

//   }
//   for(k=1;k<=2*n-2*i;k++){
//     row+=" ";
//   }
//   for(l=1;l<=i;l++){
//     row+=l;
//   }
//   console.log(row);
//  }

//   for(k=1;k<=2*n-2*i;k++){
//     row+=" ";
//   }
//   for(l=1;l<=i;l++){
//     row+=l;
//   }
//   console.log(row);
// }


//**********************11.
// let count =1;
// for(let i=1;i<=5;i++){
//   let row="";
//   for(let j=1;j<=i;j++){
//      row+=count +" ";
//      count++;
//   }
//   for(let k=4;k>=0;k--){
//     row+=" ";
//   }
//   console.log(row);
// }

// 12.
/*for(let i=1;i<=5;i++){
  let row="";
  for(let j=1;j<=i;j++){
    if(i%2!==0){
      if(j%2!==0){
        row+=1;
      }else{
         row+=0;
      }
    } 
  else if(i%2==0){
    if(j%2!==0){
    row+=0;
  }else{
    row+=1;
  }
 }
}
console.log(row);
}*/
   
//  13.

// let n=5;
// for(let i=1;i<=n;i++){
//   let row="";
//   for(let j=1;j<=i-1;j++){
//     row+=" ";
//   }
//   for(let k=1;k<2;k++){
//     row+="*";
//   }
//   for(let l=1;l<=(2*n-2*i-1);l++){
//     row+=" ";
//   }
//   for(let m=1;m<2;m++){
//     row+="*";
//   }
//   console.log(row);
// }

//################14.#############################################

// for(let i=1;i<=5;i++){
//   let row="";
//   for(let j=0;j<i;j++){
//     row+=String.fromCharCode(65+j);
//   }
//   console.log(row);
// }

// // +++++++++++++++++15.++++++++++++++

// for(let i=1;i<=5;i++){
//   let row="";
//   for(j=0;j<5-i+1;j++){
//     row+=String.fromCharCode(97+j);
//   }
//   console.log(row);
// }


 //16.

// for(let i=1;i<=5;i++){
//   let row="";
//   for(let j=0;j<i;j++){
//     row+=String.fromCharCode(64+i);
//   }
//   console.log(row);
// }

//+++++++++++++++++++++++++++  17.+++++++++++++

for(let i=1;i<=5;i++){
  let row="";
  for(let j=1;j<=4-i;j++){
    row+=" ";
  }
  for(let k=1;k<i;k++){
    row+=String.fromCharCode(64+k);
  }
  console.log(row);
}
