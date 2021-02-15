const express = require('express');

const bodyParser = require('body-parser');



const authRoutes = require('./routes/auth');

const listRoutes = require('./routes/list');

const itemRoutes = require('./routes/item');

const groceryRoutes = require('./routes/grocery');

const errorController = require('./controllers/error');


const app = express();

const ports = process.env.port || 3000;


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);

app.use('/gro', groceryRoutes );

app.use('/list', listRoutes );

app.use('/item', itemRoutes );

app.use(errorController.get404);
app.use(errorController.get500);


app.listen(ports, () => console.log(`Listening on port ${ports}`));