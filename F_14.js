let num, count = 0, ans, sum = 0;
while(true){
    num = prompt(`Enter your number : `);
    if(num==`stop`){
        ans = sum / count;
        console.log(`${sum} / ${count} = ${ans}`);
        break;
    }else {
        if(num != ` `){
            num = Number(num);
            sum += num;
            count++;
        }
    }
}