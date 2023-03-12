var cantidad=parseInt(prompt("ingrese cantidad de palabras: " ));

let list=[]
for (let i=0;i<cantidad;i++){ 
    contador=i+1;
    var palabra=prompt("ingrese palabra numero "+ contador+":");
    list.push(palabra);
} 

const contarVocales = palabra =>{
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra){
        if (vocales.includes(letra.toLowerCase())){
            cantidadVocales++;
         } 
      } 
      return cantidadVocales;
  };

  const palabraNueva=list.join("");
  const vocales = contarVocales(palabraNueva);
  console.log("todas las palabras ingresadas en total tienen %d vocales", vocales);