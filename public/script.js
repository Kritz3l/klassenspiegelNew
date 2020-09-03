openMenu8 = () => {
    location.href = 'mema8a.html';
    console.log('redirected to mema8a');
};
openMenu6 = () => {
    location.href = 'mema6a.html';
    console.log('redirected to mema6a');
};

absenzErfassen = () => {
    console.log('button clicked');
    document.getElementById('absenzenUpperPanel').style.zIndex = '1';
    document.getElementById('absenzenLowerPanel').style.zIndex = '1';
    document.getElementById('lowerPanel').style.zIndex = '-1';
    /*let button = document.getElementById('btnAbsenz');
    button.innerHTML = 'Userdaten';*/

    /*    button.onclick = () => {
        if(button.innerHTML === 'Absenzenmanager'){
            button.innerHTML = 'Userdaten';
            document.getElementById('absenzenUpperPanel').style.zIndex = '-1';
            document.getElementById('absenzenLowerPanel').style.zIndex = '-1';
            document.getElementById('lowerPanel').style.zIndex = '1';
            document.getElementById('btnAbsenz').style.display = 'initial';
        } else {
            button.innerHTML = 'Absenzenmanager'
            document.getElementById('absenzenUpperPanel').style.zIndex = '1';
            document.getElementById('absenzenLowerPanel').style.zIndex = '1';
            document.getElementById('lowerPanel').style.zIndex = '-1';
        }

        }*/
};

addAbsenz = () => {
    let anzLek = document.getElementById('anzLekPlus');
    if (isNaN(anzLek.value)) {
        alert('Input must be a number!');
        anzLek.value = '';
    } else {
        console.log(anzLek.value);
        let studentId = document.getElementById('studentId').innerHTML;
        let data = [anzLek.value, studentId];
        //todo route to send data to lowdb
        //  ./write
        /*request.open('POST', '/write');
        request.send(data)*/
    }
};

deleteAbsenz = () => {
    let anzLek = document.getElementById("anzLekMinus");
    if (isNaN(anzLek.value)) {
        alert('Input must be a number!');
        anzLek.value = '';
    } else {
        console.log(anzLek.value);
        let studentId = document.getElementById('studentId').innerHTML;
        let data = [anzLek.value, studentId];
        //todo route to send data to lowdb
        //  ./write
        /*request.open('POST', '/write');
        request.send(data)*/
    }
};

getUser = async (placeId) => {

    document.getElementById('absenzenUpperPanel').style.zIndex = '-1';
    document.getElementById('absenzenLowerPanel').style.zIndex = '-1';
    document.getElementById('lowerPanel').style.zIndex = '1';
    document.getElementById('btnAbsenz').style.display = 'initial';

    console.log('button clicked from place ' + placeId);
    let result = await fetch('/lernende', {
        method: 'GET'
    });
    let lernende = await result.json();

    let data = await fetch('/klasse', {
        method: 'GET'
    });
    let klasse = await data.json();

    let betriebeData = await fetch('/betrieb', {
        method: 'GET'
    });
    let betriebe = await betriebeData.json();

    let path = window.location.pathname;
    let page = path.split("/").pop();

    console.log(lernende);
    console.log(betriebe);

    if (page === 'mema6a.html') {
        let array1 = klasse[0]['lernende'];
        for (let i = 0; i < lernende.length; i++) {
            if (array1.indexOf(lernende[i]['id']) > -1) {
                if (lernende[i]['sitzplatz'] === placeId) {
                    let lernender = lernende[i];
                    document.getElementById('studentName').innerHTML = lernender['vorname'] + ' ' + lernender['nachname'];
                    document.getElementById('studentId').innerHTML = lernender['id'];
                    document.getElementById('absEnt').innerHTML = 'Entschuldigt: ' + lernender['absenzen'][0]['entschuldigt'];
                    document.getElementById('absUnEnt').innerHTML = 'Unentschuldigt: ' + lernender['absenzen'][0]['unentschuldigt'];
                    document.getElementById('birthday').innerHTML = lernender['geburtsdatum'];
                    document.getElementById('address').innerHTML = lernender['wohnort'];
                    document.getElementById('mobile').innerHTML = lernender['mobile'];
                    document.getElementById('mail').innerHTML = lernender['email'];
                    let betriebId = lernender['betrieb-id'];
                    for (let a = 0; a < betriebe.length; a++) {
                        if (betriebId === betriebe[a]['betrieb-id']) {
                            let betrieb = betriebe[a];
                            document.getElementById('company').innerHTML = betrieb['betrieb-name'];
                            document.getElementById('llvName').innerHTML = betrieb['lehrlingsverantwortlicher'];
                            document.getElementById('llvMail').innerHTML = betrieb['lehrlingsverantwortlicher-mail']
                        }
                    }
                }
            }
        }
    } else {
        let array1 = klasse[1]['lernende'];
        for (let i = 0; i < lernende.length; i++) {
            if (array1.indexOf(lernende[i]['id']) > -1) {
                if (lernende[i]['sitzplatz'] === placeId) {
                    let lernender = lernende[i];
                    document.getElementById('studentName').innerHTML = lernender['vorname'] + ' ' + lernender['nachname'];
                    document.getElementById('studentId').innerHTML = lernender['id'];
                    document.getElementById('birthday').innerHTML = lernender['geburtsdatum'];
                    document.getElementById('address').innerHTML = lernender['wohnort'];
                    document.getElementById('mobile').innerHTML = lernender['mobile'];
                    document.getElementById('mail').innerHTML = lernender['email'];
                    let betriebId = lernender['betrieb-id'];
                    for (let a = 0; a < betriebe.length; a++) {
                        if (betriebId === betriebe[a]['betrieb-id']) {
                            let betrieb = betriebe[a];
                            document.getElementById('company').innerHTML = betrieb['betrieb-name'];
                            document.getElementById('llvName').innerHTML = betrieb['lehrlingsverantwortlicher'];
                            document.getElementById('llvMail').innerHTML = betrieb['lehrlingsverantwortlicher-mail']
                        }
                    }
                }
            }
        }
    }
};
