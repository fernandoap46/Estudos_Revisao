class Gato{
    //-- para criar um objeto dentro de classe uso o constructor 
        constructor(Snome, Ssexo, SRaca){
    //-- this. -> informando que este atributo referesse a esta mesma classe        
            this.nome = Snome;
            this.sexo = Ssexo;
            this.raca = SRaca;
        }
    //-- metodos sempre devem ficar fora do construtor
        miar() {
            console.log("miau");
        }
    }
    // sempre que usar o new gato vou criar um objeto definido de acordo com a classe criada
    const jujuba = new Gato("jujuba","F","Siames");
    const jubileu = new Gato("jubileu","M","Siames");
    console.log(jujuba, jubileu);