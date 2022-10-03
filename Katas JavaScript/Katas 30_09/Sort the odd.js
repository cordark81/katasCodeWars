//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
 
    let impares=[];
    let indice=[];
    array.forEach((element,index) => {
       if(!(element%2==0)){
        impares.push(element);
        indice.push(index);
       };
    });
    impares.sort((a,b)=>a-b);
    for (let index = 0; index < impares.length; index++) {
        array[indice[index]]=impares[index];
        
    }
    return array;
  }

  console.log(sortArray([6,52,8,74,3,41,6,3]));