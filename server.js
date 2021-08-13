const express = require('express');
const app = express();
const porta = 3333;

//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()
//usar as rotas
app.use(express.json())

const estudiosRouter = require('./src/routes/estudios.routes')
app.use('/estudios', estudiosRouter)

const titulosRouter = require('./src/routes/titulos.routes')
app.use('/titulos', titulosRouter)

app.listen(porta,()=> console.log(`Servidor rodando na porta: ${porta}`));


