let min1=Infinity,
    min2=Infinity,
    min3=Infinity;
while(true){
    let num = prompt(`Enter your number : `);
    // console.log(num);
    if(num==`stop`){
        break;
    }else{
        num = Number(num);
        // console.log(num);
        
        if(num<=min1){
            min3=min2;
            min2=min1;
            min1=num;
            // console.log(min1);
        }else if(num>min1 && num<=min2){
            min3=min2;
            min2=num;
        }else if(num>min2 && num<=min3){
            min3=num;
        }
    }
}
console.log(min1);
console.log(min2);
console.log(min3);