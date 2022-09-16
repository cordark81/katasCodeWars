//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  
    let exponente = value.toString().length;
    
    let intArr = Array.from(String(value), myFunc = num => Number(num));

    const operacion = intArr.reduce ((acc, el)=>acc+(Math.pow(el,exponente)),0);

    return (operacion==value);
  }
  
  console.log(narcissistic(153));