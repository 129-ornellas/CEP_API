const express = require('express')
const { Cep } = require('./services/consulta-cep');
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const cep = new Cep()

    if(cep.validaCep('241107305')){
        try {
            const endereco = await cep.retornaEndereco('24110705'); // CEP real pra testar
            res.send(endereco); // manda o JSON como resposta
        } catch (err) {
            res.status(500).send('Erro ao buscar CEP');
        }
    }
    return res.status(500).send('Cep digitado incorretamente, insira um Cep válido!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})