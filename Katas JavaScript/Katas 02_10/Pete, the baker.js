//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {

       
    const receta=Object.keys(recipe);
    const recetaValores=Object.values(recipe);
    const disponible=Object.keys(available);
    const disponibleValores=Object.values(available);

    let contador=0;
    let ingredienteCubiertos=[];
    
    let arrayRecetaValores=receta.map((el,index)=>{
        return [el,recetaValores[index]];
    });

    
    let arrayDisponibleValores=disponible.map((el,index)=>{
        return [el,disponibleValores[index]];
    });
    
    arrayRecetaValores.forEach(elReceta => {
        arrayDisponibleValores.forEach(elDisponible => {
            if(elReceta[0]==elDisponible[0]){
                if(elReceta[1]<=elDisponible[1]){
                    if(1<=(elDisponible[1]/elReceta[1])){
                        ingredienteCubiertos.push(elDisponible[1]/elReceta[1]);
                        ++contador;
                    }
                }
            }
        });
        
        
    });
    
    if(arrayRecetaValores.length==contador){
      return Math.trunc(ingredienteCubiertos.reduce((menor,numero)=>{
            if(menor> numero){
                menor= numero;
            }
            return menor;
        }));

    }else{
        return 0;
    }


    

  }



  console.log(cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, milk: 200,eggs:3}));