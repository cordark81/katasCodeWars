// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){

    // solocion de la web 
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
  }

  console.log(pigIt("hola a todos"));