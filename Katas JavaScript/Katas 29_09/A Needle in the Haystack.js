//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
   let posicion;
   haystack.forEach((element,index)=> {
      if (element=="needle"){
      posicion= index+1;
      }
   });

  
  return `found the needle at position ${posicion}`;
}

  console.log(findNeedle([1,2,3,9]));