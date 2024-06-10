
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();



//middleware 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.use(require("./src/main.routes.js"))

app.listen(3000, console.log(`Servidor Iniciado`))
