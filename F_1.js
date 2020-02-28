/********************for operate test */


// let num1 = prompt(`Input number 1 : `)
// let num2 = prompt(`Input number 2 : `)
// // console.log(num1);
// // console.log(num2);
// if(num1>num2){
//     let min = num2;
// }else{
//     min = num1;
// }
// // console.log(min);
// let i=1;
// while (i<=min) {
//     if(num1%i==0 && num2%i==0){
//         num1 = num1/i;
//         num2 = num2/i;
//         // console.log(`ans = ${num1} / ${num2}`);
//         // console.log(`i = ${i}`);
//         i++
//     }else{
//         i++;
//     }
// }

// console.log(`ans = ${num1} / ${num2}`);



////////////////////////?///////////////////////////////////////////////////////////////////////////////
/************ to make function ***********************************/

function lowfraction(num1,num2){
    if(num1>num2){
        let min = num2;
    }else{
        min = num1;
    }
    let i=1;
    while (i<=min) {
        if(num1%i==0 && num2%i==0){
            num1 /= i;
            num2 /= i;
            i++;
        }else{
            i++;
        }
    }
    return (`ans = ${num1} / ${num2}`);
}

console.log(lowfraction(99,186));