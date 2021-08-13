const mongoose = require("mongoose");

const connect = ()=>{mongoose.connect('mongodb://localhost:27017/filmes-db', //filmes-db é o nome do database
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true //primeiro parâmetro String de conexão, segundo parâmetro objeto padrão
    })
    .then(console.log("Database conectada com sucesso."))
    .catch(err => console.err)
}

module.exports = {connect} //funções são exportadas entre chaves