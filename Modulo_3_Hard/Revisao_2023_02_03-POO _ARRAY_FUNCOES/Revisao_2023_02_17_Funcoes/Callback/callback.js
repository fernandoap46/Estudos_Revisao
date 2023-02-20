// executar uma função dentro de outra função
// esta e minha função que exibe um texto
function exibir(text){
    console.log(text);
}

function ola(acao,texto) {  
    acao(texto);
}
// minha calback utiliza a minha função de exibir no console"exibir" para mostrar meu texto "ola mundo"
// resumindo utilisei minha função exibir para mostrar meu ola mundo executei uma função dentro da outra
ola(exibir,"ola mundo");