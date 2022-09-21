// codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
    str =  str.split("-");
    return str.map(function(el,i){
        if(el=="-"|| el =="_"){
            el = str[i+1].toUpperCase();
            str.splice(i+1,1);
        }
        return el;
   }).join("");    
}

console.log(toCamelCase("the-stealth-warrior"));

