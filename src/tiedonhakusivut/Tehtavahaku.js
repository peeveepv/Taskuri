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

export function haePerheenTehtavat(ryhmaId) {
    return fetch(tehtavaUrl + '/' + ryhmaId, {
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Ongelmia tiedonhaussa');
        })
}

export function lisaaTehtava() {
    return fetch(tehtavaUrl + '/lisaa', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'luoja' : this.state.luoja,
            'lammas': this.state.lammas,
            'ryhmaId': this.state.ryhmaId,
            'nimi': this.state.nimi,
            'kuvaus': this.state.kuvaus,
            'pisteet': this.state.pisteet,
            'deadline': this.state.deadline,
            'tila': this.state.tila
        })
    })
        .then((function(response) {
            if (response.ok) {
                alert('Tehtävä lisätty');
            } throw new Error('Lisäys ei onnistunut');
        }));
}

export function muokkaaTehtavaa(tehtavaId) {
    return fetch(tehtavaUrl + '/muokkaa/' + tehtavaId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' },
        body: JSON.stringify({
            'luoja' : this.state.luoja,
            'lammas': this.state.lammas,
            'ryhmaId': this.state.ryhmaId,
            'nimi': this.state.nimi,
            'kuvaus': this.state.kuvaus,
            'pisteet': this.state.pisteet,
            'deadline': this.state.deadline,
            'tila': this.state.tila
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
        .then((function(response) {
            if (response.ok) {
                alert('Muutokset onnistuivat');
            } throw new Error('Muutokset epäonnistuivat')
        }))
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
