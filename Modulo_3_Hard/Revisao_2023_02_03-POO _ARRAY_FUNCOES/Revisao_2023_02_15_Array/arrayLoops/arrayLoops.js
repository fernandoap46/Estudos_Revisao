// --Loops**********************************************************************************

//-- MAP***********************************************************************************
//--no exemplo abaixo utilizamod o map para traser um numero a cada volta e com index ele pega a posiçao deste array
//--neste caso 1 esta na posição 0, 2 na posição 1 e assim sucessivamente
// const numeros =[1,2,3]
// numeros.map((numero,index)=>{
//     console.log(numero,index);
// })
// console.log(numeros);
// ----------------------------------------------------------------------
//--retornando um novo array
// const numeros =[2,3,4];
// var numerosM2 = numeros.map((numero,index)=>{
//     if(numero >2){
//         return numero;
//     }
// });
// console.log(numeros);
// console.log(numerosM2);

//-- forEach()***********************************************************************************
//--feito para enviar o dado seja para um bd ou para um console log
// --se eu quiser mandar o numero para fora uso forEach se quiser reutiliar uso o map
// const numeros =[2,3,4];
// numeros.forEach((numero)=>{
//     console.log(numero)
// })
// console.log(numeros);

//--filter****************************************************************************************
// --em seu sentido literario filter e nada mas que um filtro ele seleciona apemas o que é definido por padrão
// const numeros =[2,3,4];
// var numeroM2=numeros.filter((numero)=>numero>2);
// console.log(numeros);
// console.log(numeroM2);

//--reduce****************************************************************************************
// --soma os valores do array e guarda 

// const numeros =[2,3,4];
// console.log(numeros.reduce((acumulador, currentValue)=> acumulador+currentValue));

//--Includes****************************************************************************************
// --retorna false de o valor não estiver dentro do array e true se o valor estiver dentro do array
//--abaixo os dois resultados devolvem true pois estão dentro do array
// const numeros =[2,3,4,12];
// console.log(numeros.includes(2));
// console.log(numeros.includes(3));
// console.log(numeros);
