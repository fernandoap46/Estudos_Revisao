Erros apontados pelo console

undefined= quando algo no seu codigo falta ser definido ex: quando você não defini o tipo de dado
null= falta acressentar um valor, ou seja valor que não foi inicializado ou não processado


------------------------------------------------------------------------------------------------------
diferença de variaveis

var- ela sempre é global evitar usar, e seu valor pode ser alterado a qualquer momento
let- funciona como global apenas que declaro ela desta forma, e seu valor pode ser alterado a qualquer momento
const- funciona como global apenas que declaro ela desta forma, e seu valor é constante não aceita alteração

-------------------------------------------------------------------------------------------------------
Operadores

typeof- operador retorna o tipo do seu dado se é string, number, boolean,objeto ou function.
length- e a forma de retorna a medição do seu dado em seu contexto
string- Converte o dado em texto
toUpperCase- Tranformar em letra maiuscula
toLowerCase- Transformar em minuscula

---------------------------------------------------------------------------------------------------------
Concatenação e interpolação de dados 

const fer = "fer"
const fer1 = 1;
Concatenação
console.log(''+fer+''+fer1);
interpolação(aproximação seu significado)
console.log(`${fer}${fer1}`);

-----------------------------------------------------------------------------------------------------------
Operador ternário

O nosso bom e velhor if else de forma açucarada

var nota = 10
var nota = (nota >=7 ? "aprovado" : "reprovado");
console.log(nota);

------------------------------------------------------------------------------------------------------------

