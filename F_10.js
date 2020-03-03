let min=Infinity;
while(true){
    let num = prompt(`Input your number : `);
    if(num==`stop`){
        break;
    }else{
        num = Number(num);
        if(num<=min){
            min = num;
        }
    }
}
console.log(min)