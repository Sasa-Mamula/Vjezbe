let rand_num = Math.floor(Math.random() * 100);
var lista = [];

for(var i = 0; i < lista. length ; i++){
  
    console. log(lista[i])
    
    }


let home = (req, res) => res.send('Hello World, ovaj puta iz paketa! <br> /dodaj za dodati random broj u listu <br> /dohvati za ispis cijele liste')
let dodaj = (req, res) => res.send('U listu dodajem broj ' + rand_num + " po " + lista.push(rand_num) + ". put")
let dohvati = (req, res) => res.send('Ovi brojevi se nalaze u listi. ' + lista)

export default { home, dodaj, dohvati } // na kraju navodimo koje JS objekte treba eksportati