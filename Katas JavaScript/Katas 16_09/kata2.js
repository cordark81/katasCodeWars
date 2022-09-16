//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){


let myArray = Array.from(String(numbers).split(" "), myFunc = num => Number(num));
return `${Math.max.apply(null,myArray)} ${Math.min.apply(null,myArray)}`;


//let myFunc = num => Number(num);


/*NO FUNCIONA DEL TODO BIEN CON LOS NEGATIVOS

let numMax=Number.MIN_VALUE;
let numMin=Number.MAX_VALUE;

for (let i=0; i<myArray.length;i++){

    if(myArray[i]>numMax){
        numMax=myArray[i];
    }
}

for (let i=0; i<myArray.length;i++){

    if(myArray[i]<numMin){
        numMin=myArray[i];
    }
}
let result= `${numMax} ${numMin}`;

return result;
*/


}

console.log(highAndLow("-656569 -98989 -879789"));
