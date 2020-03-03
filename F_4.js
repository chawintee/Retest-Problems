let sequence,
goldenratio =  1.61803398875,
number;

while(true){
    sequence = prompt (`Enter you sequence`)
    if(isFinite(sequence)){
        number = (((goldenratio)**sequence)-(1-goldenratio)**sequence)/Math.sqrt(5);
        console.log(`your sequence is ${sequence} your fibonacci number is ${number.toFixed(0)}`)
    }else{
        break;
    }
}

