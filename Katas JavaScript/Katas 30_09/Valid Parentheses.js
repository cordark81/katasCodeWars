//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
    let resultado=true;
    let contadorAbrir=0;
    let contadorCerrar=0;

    for (let index = 0; index < parens.length; index++) {
        parens.charAt(0)==")"?resultado=false:resultado=true;
        if(resultado==true){
            if(parens.charAt(index)=="("){
                ++contadorAbrir;
            }else{
                ++contadorCerrar;
            }

        };
    if (contadorAbrir==contadorCerrar&&contadorAbrir!=0&&contadorCerrar!=0){
        resultado=true;
    }
  }
  return contadorAbrir==contadorCerrar?true:false;
};

console.log(validParentheses("())("));