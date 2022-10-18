//https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript

const xMarksTheSpot = (input) => {
  return (
    ((resultado = []),
    (contador = 0),
    input.map((x, indiceX) => {
      return x.map((y, indiceY) => {
        return (
          (resultado =
            y === "x" && ++contador ? [indiceX, indiceY] : resultado),
          y
        );
      });
    })),
    contador === 1 ? resultado : []
  );
};

console.log(
  xMarksTheSpot([
    ["o", "o", "x"],
    ["o", "o", "o"],
  ])
);
