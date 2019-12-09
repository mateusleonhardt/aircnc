const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://mateusl91:mateusl91@cluster0-ge0wa.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// O cors deve ser adicionado para evitar que outras aplicações consumam os dados da api
// Para garantir que somente o meu site, por exemplo, consuma as informações, deve ser passado um objeto como "{ origin: 'http://localhost:3333'}"
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333); 