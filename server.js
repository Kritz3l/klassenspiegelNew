const express = require('express');
const app = express();
const port = 8081;

app.listen(port, () => {
    console.log(`Server up and running on http://localhost:${port}`)
});
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //redirect requests to 8081 to mema6a.html
    res.redirect('mema6a.html')
});
