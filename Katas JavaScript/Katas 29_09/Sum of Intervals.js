//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
function sumIntervals(intervals) {
  /*let totalNumeros=[];

  intervals.forEach(element => {
    for (let index = element[0]; index < element[1]; index++) {
      totalNumeros.push(index);
    }
  });

  let numerosSinRepetir = new Set(totalNumeros);
  numerosSinRepetir=  Array.from(numerosSinRepetir);
  numerosSinRepetir.sort((a,b)=>a-b); 
  

  return numerosSinRepetir.length;
  
  }*/

  let arrayIntervalosLimpios = [];
  arrayIntervalosLimpios[0] = intervals[0];

  intervals.array.forEach((element) => {
    if (element[0] >= arrayIntervalosLimpios[0][0]) {
      //comparando los dos pequeños

      if (element[0] <= arrayIntervalosLimpios[0][1]) {
        //el pequeño forma parte del intervalo//
        if (element[1] > arrayIntervalosLimpios[0][1]) {
          //nos amplia nuestro intervalo por arriba
          arrayIntervalosLimpios[0][1] = element[1];
        }
      } else {
        //tenemos un nuevo intervalo
        arrayIntervalosLimpios.push(element);
      }
    } else {
      //el pequeño dado es menor que el del intervalo con el que lo estamos comparando
      //Comparamos los grandes para saber lo que sucede
      if (element[1] >= arrayIntervalosLimpios[0][1]) {
        //el anterior intervalo esta contenido en el element
        arrayIntervalosLimpios[0] = element;
      } else {
        //tenemos un nuevo intervalo por debajo del que teníamos
      }
    }
  });

  /*solucione web
  function sumIntervals(intervals){
  intervals = intervals.sort(function(a, b) { // O(n)
    return a[0] - b[0];
  });
  intervals = intervals.reduce(function(acc, el, index, array) { // O(n)
    const anterior = array[index - 1];
    if (array.length > 1 && anterior !== undefined) {
      if (el[0] < acc[acc.length - 1]) {
        if (el[1] >= acc[acc.length - 1]) {
          acc[acc.length - 1] = el[1];
        }
      } else {
        acc.push(...el);
      }
    } else {
      acc.push(...el);
    }
    return acc;
  }, []);
  let result = 0;
  for (let i = 0; i < intervals.length - 1 ; i+=2) { // O(2n)
    result+=(intervals[i + 1] - intervals[i]);
  }
  return result;
}*/
}

console.log(
  sumIntervals([
    [1, 5],
    [7, 10],
    [4, 8],
  ])
);
