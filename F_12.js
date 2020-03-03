let num, 
max = -Infinity , 
min = Infinity ;
while (true) {
    num = prompt(`Enter your number : `);
    console.log(num)
    if(num ==`stop`){
        break;
    }else{
        num = Number(num);

        if(num<=min){
            min = num;
            console.log(min)
        }if(num>=max){
            max = num;
            console.log(max)
        }
    }
}
console.log(max);
console.log(min);