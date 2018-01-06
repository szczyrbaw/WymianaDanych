const express = require('express');
let app = express();
/*app.use(express.static('assets'));*/

/*app.get('/', (req, res) => {
    res.sendFile('/index.html');
});*/

/*app.get('/userform', (req,res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});*/

/*let server = app.listen(3000, 'localhost', function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`Przykładowa aplikacja nasłuchuje na http:// ${host} : ${port}`);
});*/

app.use('/store', (req, res, next) => {
    console.log('Hej, jestem pośrednikiem przy żądaniu do /store');
    next();
});
app.get('/', (req, res) => {
    res.send('Hello world');
})
app.get('/store', (req,res) => {
    res.send('To jest sklep');
})

app.listen(3000);
app.use((req, res, next) => {
    res.status(404).send('Nie znaleziono podanego adresu!');
});