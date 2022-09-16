//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
// la linea 3 es  7 + 9 + 11 = 27

function rowSumOddNumbers(n) {
/*1 1 (1)
  2 3 (3,5)
  3 6 (7,9,11)
  4 10 (13,15,17,19)
  5 15 (21,23,25,27,29)

  const arrayImpares = new Array (50);
let contador = 0;
for ( let i=1; i<50; i++){
    if (!(i % 2 == 0)){
        arrayImpares[contador] = i;
        contador++;
    }
}
*/

return n*n*n;

}

console.log(rowSumOddNumbers(2));