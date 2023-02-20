// --obejeto gato--
const gato ={
//-- atributos/propiedades--
    nome: "jujuba",
    sexo: "F",
    raca: "Siames",
//-- definindo um metodo dentro de um objeto--
    miar(){
        console.log("miau");
    },
};
//-- para acessar meu objeto eu chamo o objeto+ seu atributo--
console.log(gato.nome);
//-- executando metodo miar--
gato.miar()

// -- Class
//--caso eu quera receber esta informação de um input
let nome =$("#nome").val();