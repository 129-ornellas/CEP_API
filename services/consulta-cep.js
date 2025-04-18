
class Cep {
    constructor(cep){
        this.cep = cep
    }

    validaCep(cep) {
        return /^[0-9]{8}$/.test(cep);
    }

    retornaEndereco(cep){
        return fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                console.error('Erro ao buscar CEP:', err);
                throw err;
            });
    }
    
}

module.exports = { Cep };