let sum =0;
for(i=1;i<=155;i+=2){
    sum += i * (i+2) * (i+4);
    console.log(`${i}x${i+2}x${i+4}`)
}
console.log(sum)