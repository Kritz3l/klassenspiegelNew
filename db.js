const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./data.json');
const db = low(adapter);

db.defaults({
    lernende: [
        {
            "id": 1234,
            "vorname": "",
            "nachname": "",
            "mobile": "",
            "geburtsdatum": "",
            "email": "",
            "sitzplatz": "",
            "betrieb-id": 1234,
            "Wohnort": "",
            "absenzen": [
                {
                    "entschuldigt": 1,
                    "unentschuldigt": 1,
                },
            ]
        }], klassen: [
        {
            "klasse-id": 1234,
            "klasse-name": "",
            "lernende": 1234
        }], betrieb: [
        {
            "betrieb-id": 1324,
            "betrieb-name": "",
            "lehrlingsverantwortlicher": "",
            "strasse": "",
            "ort": "",
            "plz": ""
        }]
})
.write();

module.exports.test = () => {
    return 'test'
};

module.exports = {
    getLernende: (id) => {
        return db.get('lernende')
            .value()
    },
    getClass: (id) =>{
        return db.get('klassen')
            .value()
    },
    getBetriebe: (id) => {
        return db.get('betrieb')
            .value()
    },
    write: (id) => {
        db.set('')
    }
};
