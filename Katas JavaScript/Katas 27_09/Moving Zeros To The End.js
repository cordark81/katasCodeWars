//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
 
    let ceros=arr.filter((el) => el === 0);
    let sinCeros=arr.filter((el)=> el !==0);
    
    return sinCeros.concat(ceros);
    
  }

  console.log(moveZeros([{},[],2,0,0,1,5,4,0,0,6]));