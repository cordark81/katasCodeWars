
/* NO ES LO QUE PIDE LA KATA
const resultado = (a, b) => {
  
  const unionArray = a.concat(b);
  const dataArray = new Set(unionArray);
  let result = [...dataArray]; 
  return result //, `a was [${a}], b was [${b}]`;

}

console.log(resultado([1,2],[3,2,1]));*/

const resultado = (a, b) => {

    const texto= ` a was [${a}], b was [${b}]`;
    const result= a.filter(e => !b.includes(e));
    //return a.filter(e => !b.includes(e)), ` a was [${a}], b was [${b}]`;
    
    return result;
}

console.log(resultado([1,2],[1]));