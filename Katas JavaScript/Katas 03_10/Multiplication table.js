//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function (size) {
  let matriz = [];

  for (let x = 1; x <= size; x++) {
    let matrizAux = [];
    for (let y = 1; y <= size; y++) {
      matrizAux.push(x * y);
    }
    matriz.push(matrizAux);
  }
  return matriz;
};

console.log(multiplicationTable(4));
