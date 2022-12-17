//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

let walk = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];

function isValidWalk(walk) {
  let posicion = [0, 0];

  walk.forEach((element) => {
    if (element == "n") {
      ++posicion[0];
    } else if (element == "s") {
      --posicion[0];
    } else if (element == "w") {
      ++posicion[1];
    } else {
      --posicion[1];
    }
  });

  return walk.reduce((acc, el) => ++acc, 0) === 10 &&
    posicion[0] == 0 &&
    posicion[1] == 0
    ? true
    : false;
}

console.log(isValidWalk(walk));
