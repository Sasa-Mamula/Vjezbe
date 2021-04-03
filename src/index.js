import express from 'express';
import routes from './routes';

const app = express() // instanciranje aplikacije
const port = 4000 // port na kojem će web server slušati
const datum = new Date();
var rijeci = ["suncano", "kisovito", "oblacno"];
var vrijednosti = rijeci[Math.floor(Math.random()*rijeci.length)];
var studenti = [{
    JMBAG : 1254763521, 
    ime : "Slavko",
    prezime: "Kuretić",
    godina_studija : 4

}, {
    JMBAG : 4523781235,
    ime : "Borna",
    prezime: "Brnabić",
    godina_studija : 2

}, {
    JMBAG : 312478592,
    ime : "Mislav",
    prezime: "Martić",
    godina_studija : 1

}, {
    JMBAG : 3245684789,
    ime : "Ivan",
    prezime: "Bulić",
    godina_studija : 2

},{
    JMBAG : 3556124879,
    ime : "Nikolina",
    prezime: "Boneta",
    godina_studija : 5

}];

app.get('/', (req, res) => res.send('/datum prikazuje današnji datum <br> /prognoza prikazuje nasumično vrijeme <br> /dodaj dodaje broj u listu <br> /dohvati dohvaća broj iz petlje <br> /studneti ispisuje sve studente <br> /studenti/first ispisuje prvog studenta <br> /studenti/last ispisuje zadnjeg studenta'))
app.get('/datum', (req, res) => res.send('Današnji datum jest' + datum))
app.get('/prognoza', (req, res) => res.send('Nasumična riječ glasi: ' + vrijednosti))
app.get('/dodaj', routes.dodaj)
app.get('/dohvati', routes.dohvati)
app.get('/studenti', (req, res) => res.send('Ruta za studente...' + JSON.stringify(studenti)))
app.get('/studenti/first', (req, res) => res.send('Ovo je prvi student u listi' + JSON.stringify(studenti[0])) )
app.get('/studenti/last', (req, res) => res.send('Ovo je zadnji student u listi'+ JSON.stringify(studenti[4])) )

app.listen(port, () => console.log(`Slušam na portu ${port}!`))