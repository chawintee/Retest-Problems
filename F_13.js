let num,
min = Infinity,
max = -Infinity;
 
while(true){
    num = prompt(`Enter your number`);
    console.log(num)
    if (num == `stop`){
        let ans = max - min ;
        console.log(`${max} - ${min} = ${ans}`);
        break;
    }else{
        num = Number(num)
        if (num >= max){
            max = num;
            console.log(max);
        }if (num <= min){
            min = num;
            console.log(min);
        } 
        }
}