const express =  require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, './public');

app.use( express.static(publicPath) );

app.listen(process.env.PORT || 3000, () => {
    console.log('Puerto 3000 iniciado exitosamente.');
});

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/register', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});