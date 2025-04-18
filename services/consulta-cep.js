
class Cep {
    constructor(cep){
        this.cep = cep
    }
    retornaEndereco(cep){
        return "endereço" + cep
    }
    
}

module.exports = { Cep };