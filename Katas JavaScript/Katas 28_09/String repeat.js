//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr (n, s) {
  
  let resultado="";

  for (let index = 1; index <= n; index++) {
    
    resultado =`${resultado}${s}`;
  }
    
  return resultado;
  }

  console.log(repeatStr(5,"o"));
  