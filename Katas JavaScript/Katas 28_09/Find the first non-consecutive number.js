//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive (arr) {

    let noConsecutivos= false;

    return arr.reduce((acc,el,index)=>{
        
        if(noConsecutivos!=true){
            if(index==0){
                return acc=el;
            }            
            else if(acc==el-1){
                return acc=acc+1;
           
            }else{
                noConsecutivos=true;
                acc=el;
                return acc;
            }
        }else{
            return acc;
        }
    },0);

}
/*
function firstNonConsecutive (arr) {
    let noConsecutivos=false;
    arr.reduce((acc,el)=>{
       if(noConsecutivos!=true){
            if((Math.abs(acc)-Math.abs(el)==1)||(Math.abs(acc)-Math.abs(el)==-1)){
                return acc=acc+1;
            }
            else{
                
            }
       }
    });
    
}*/

console.log(firstNonConsecutive([1,2,3,4,5,6]));