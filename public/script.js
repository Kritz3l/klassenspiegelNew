openMenu8 = () => {
    location.href = 'mema8a.html';
    console.log('redirected to mema8a');
};
openMenu6 = () => {
    location.href = 'mema6a.html';
    console.log('redirected to mema6a');
};

absenzErfassen = () => {
    alert('button clicked')
};

getUser = async (placeId) => {
    console.log('button clicked from place ' + placeId);
    let result = await fetch('/lernende', {
        method: 'GET'
    });
    let lernende = await result.json();
    let data = await fetch('/klasse', {
        method: 'GET'
    });
    let klasse = await data.json();

    let path = window.location.pathname;
    let page = path.split("/").pop();

    console.log(lernende);

    if(page === 'mema6a.html'){
            let students = klasse[0]['lernende'];
            console.log(students);

            for(key in lernende){
                //if(lernende[key]['id'] === students)
                console.log(lernende[key]['id'])
            }

            document.getElementById('studentName').innerHTML = "New text!";
            //console.log(klasse[0]['lernende'][key])

    } else {
        for(key in klasse[1]['lernende']) {
            console.log(klasse[1]['lernende'][key])
        }
    }

    //console.log(klasse, lernende)

    /* if(id === placeId){
        console.log('der lernende sitzt auf platz ' + placeId)
    }*/

    /*let lernende = fetch('/lernende', {
        method: 'GET'
    }).then(result => {
        return result.json();
    }).then(json => {
        console.log("json result", json)
    }).catch(error => {
        console.log('Error: ' + error)
    });*/
};
