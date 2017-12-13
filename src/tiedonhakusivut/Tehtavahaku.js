import React, { Component } from 'react';

const tehtavaUrl = 'https://taskuri.herokuapp.com/tehtava';

export function haeKayttajanTehtavat(lammas) {
    return fetch(tehtavaUrl + '/lampaantehtavat/' + lammas, {
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Ongelmia tiedonhaussa');
        })
}

export function haePerheenValisemattomatTehtavat(ryhmaId) {
    return fetch(tehtavaUrl + '/valitsematon/' + ryhmaId, {
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Ongelmia tiedonhaussa');
        })
}

export function lisaaTehtava(luoja, lammas, ryhmaId, nimi, kuvaus, pisteet, deadline, tila) {
    return fetch(tehtavaUrl + '/lisaa', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'luoja' : luoja,
            'lammas': lammas,
            'ryhmaId': ryhmaId,
            'nimi': nimi,
            'kuvaus': kuvaus,
            'pisteet': pisteet,
            'deadline': deadline,
            'tila': tila
        })
    })
        .then((function(response) {
            if (response.ok) {
                alert('Tehtävä lisätty');
            } throw new Error('Lisäys ei onnistunut');
        }));
}

export function muokkaaTehtavaa(tehtavaId, luoja, lammas, ryhmaId, nimi, kuvaus, pisteet, deadline, tila) {
    return fetch(tehtavaUrl + '/muokkaa/' + tehtavaId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' },
        body: JSON.stringify({
            'luoja' : luoja,
            'lammas': lammas,
            'ryhmaId': ryhmaId,
            'nimi': nimi,
            'kuvaus': kuvaus,
            'pisteet': pisteet,
            'deadline': deadline,
            'tila': tila
        })
    })
        .then((function(response) {
            if (response.ok) {
                alert('Muutokset onnistuivat');
            } throw new Error('Muutokset epäonnistuivat')
        }))
}

export function poistaTehtava(tehtavaId) {
    return fetch(tehtavaUrl + '/poista/' + tehtavaId, {
        method: 'DELETE',
    })
        .then(function(response) {
            if (response.ok) {
                alert('Muutokset onnistuivat');
            } throw new Error('Muutokset epäonnistuivat')
        })
}

export function suoritaTehtava(kayttajaId, tehtavaId) {
  return fetch(tehtavaUrl + '/' + kayttajaId + '/suorita/' + tehtavaId, {
    method: 'PUT',
  })
    .then(function(response) {
      if (response.ok) {
        alert('Tehtävä suoritettu!');
      } throw new Error('Tehtävän merkitseminen suoritetuksi epäonnistui')
    })
}

export function haeKayttajanTekematTehtavat(lammas) {
    return fetch(tehtavaUrl+ '/lampaantehdyttehtavat/' + lammas, {
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Ongelmia tiedonhaussa');
        })
}


export function haeKayttajanTekemattomatTehtavat(lammas) {
    return fetch(tehtavaUrl+ '/lampaantehdyttehtavat/' + lammas + '?tila=false', {
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Ongelmia tiedonhaussa');
        })
}

export function haePerheenTehdytTehtavat(ryhmaId) {
    return fetch(tehtavaUrl+ '/ryhmantehdyttehtavat/' + ryhmaId + {
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Ongelmia tiedonhaussa');
        })
}

export function haePerheenTekemattomatTehtavat(ryhmaId) {
    return fetch(tehtavaUrl+ '/ryhmantehdyttehtavat/' + ryhmaId + '?tila=false', {
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Ongelmia tiedonhaussa');
        })
}
