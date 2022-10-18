//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

let array = ["a", "b", "c"];

let lista = (array) => array.map((el, index) => `${index + 1}: ${el}`);

console.log(lista(array));
