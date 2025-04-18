const express = require('express')
const { Cep } = require('./services/consulta-cep');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    endereco = new Cep
    res.send(endereco.retornaEndereco('asdasdsa'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})