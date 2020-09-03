const express = require('express');
const db = require('./db.js');

const app = express();
const port = 8081;

app.listen(port, () => {
    console.log(`Server up and running on http://localhost:${port}`)
});
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //redirect req to 8081 to mema6a.html
    res.redirect('mema6a.html')
});

app.get('/lernende', (req, res) => {
    let lernende = db.getLernende();
    res.send(lernende);
    res.end();
});
app.get('/klasse', (req, res) => {
    let klasse = db.getClass();
    res.send(klasse);
    res.end();
});
app.get('/betrieb', (req, res) => {
    let betriebe = db.getBetriebe();
    res.send(betriebe);
    res.end()
});
app.post('/write', (req, res) =>  {

});
