// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
    
    return classPoints.reduce((acc,el)=>acc+el,0)/classPoints.length<=yourPoints;
  }
  
  console.log(betterThanAverage([2,3],5));