import React, { Component } from 'react';


    const palveluurl = 'https://taskuri.herokuapp.com/';

    export function haeKaikkiKayttajat() {
        return fetch(palveluurl+'/kayttaja/kaikki')
            .then(function(response){
                return response.json();
            })
            .catch(function(error) {
                console.log('Tapahtui virhe: ' + error.message);
                throw error;
            });
    }

    export function haeKayttajaIdlla(id) {
        return fetch(palveluurl+'/kayttaja/' + id, {
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json;
                } throw new Error('Pyyntöä käsitellessä tapahtui virhe');
            })
    }

    export function lisaaKayttaja(nimi, salasana, rooli, pisteet, ryhmaID, email) {
        return fetch(palveluurl+'/kayttaja/lisaa', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(nimi, salasana, rooli, pisteet, ryhmaID, email)
        })
            .then((function(response) {
                if (response.ok) {
                    return 'Lisätty';
                } throw new Error('Lisäys ei onnistunut');
            }));
    }


