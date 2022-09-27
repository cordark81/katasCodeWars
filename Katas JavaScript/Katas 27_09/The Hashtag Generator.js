//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag (str) {
    
    if (str===""||str.length>=140){
        return false;
    }else{
    let auxiliar = str.split(" ");
    
    return `#${auxiliar.map(el=>el= el.charAt(0).toUpperCase()+el.slice(1)).join("")}`;
    }
}


console.log(generateHashtag("CodeWars"));

/*function generateHashtag(string) {
  if (string.trim() === '') return false;

  const stringWithCamelCase = string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

  return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}*/