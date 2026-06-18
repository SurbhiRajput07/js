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

let n=5;
 for(i=1;i<=n;i++){
  let row="";
  for(j=1;j<=i;j++){
    row+=j;

  }
  for(k=1;k<=2*n-2*i;k++){
    row+=" ";
  }
  for(l=1;l<=i;l++){
    row+=l;
  }
  console.log(row);
 }
