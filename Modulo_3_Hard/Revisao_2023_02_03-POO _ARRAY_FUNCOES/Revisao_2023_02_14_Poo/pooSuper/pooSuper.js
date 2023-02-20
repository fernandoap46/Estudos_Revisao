//Super reaproveitamento atributos em outra em um objeto dentro de outra classe
class Gato{
//-- para criar um objeto dentro de classe uso o constructor 
    constructor(Snome, Ssexo, Sraca){
//-- this. -> informando que este atributo referesse a esta mesma classe        
        this.nome = Snome;
        this.sexo = Ssexo;
        this.raca = Sraca;
    }
//-- metodos sempre devem ficar fora do construtor
    miar() {
        console.log("miau");
    }
}
class Cadastro extends Gato{
    constructor(Snome, Ssexo, Sraca){        
//utilizamos metodo super para reaproveitar as configurações de atributos de um objeto        
        super(Snome, Ssexo, Sraca)
        this.id =1223
    }
}

const gato1 = new Cadastro("jujuba","F","Siames");
console.log(gato1);

