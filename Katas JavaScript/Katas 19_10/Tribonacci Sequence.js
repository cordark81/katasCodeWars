//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

let signature = [1, 1, 1];
let n = 0;
let resultado = [];

function tribonacci(signature, n) {
  let largoArrayInicial = signature.length;

  if (n < largoArrayInicial) {
    for (let index = 0; index < n; index++) {
      resultado.push(signature[index]);
    }
  } else {
    for (let index = 0; index < n - largoArrayInicial; index++) {
      let posicion = 3;
      resultado = [...signature];
      resultado.push(
        signature.reduce((acc, el, index) => {
          if (index == signature.length - posicion) {
            --posicion;
            acc += el;
          }
          return acc;
        }, 0)
      );
      signature = [...resultado];
    }
  }

  return resultado === undefined ? (resultado = []) : resultado;
}
console.log(tribonacci(signature, n));
