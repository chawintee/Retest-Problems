let sum = 0 ,ans;

// let ans = (3/2==1) ? "true" : "false";

// console.log(ans)

for(i=1;i<=18954;i++){
    ans = (i%2==0) ? sum -= i : sum += i;
}

// for(i=1;i<=18954;i++){
//     if (i%2==0){
//         sum -= i;
//     } else {
//         sum += i;
//     }
// }

// console.log(sum)
console.log(ans)