import React, { Component } from 'react';

//Tällä sivulla on metodeita, joilla haetaan tietoa käyttäjistä (kaikista tai vain yhdestä) sekä poistetaan/muokataan heidän tietojaan
//Näitä metodeita käytetään pääasiassa AdminSivu.js-sivulla


    const palveluurl = 'https://taskuri.herokuapp.com/';

    export function haeKaikkiRyhmanKayttajat(ryhmaId) {
        return fetch(palveluurl+'/kayttaja/ryhma/' + ryhmaId)
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

    export function lisaaKayttaja(nimi, salasana, admin, pisteet, ryhmaID, email) {
        return fetch(palveluurl+'/kayttaja/lisaa', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                "nimi": nimi,
                "salasana": salasana,
                "admin": admin,
                "pisteet": pisteet,
                "ryhmaID": ryhmaID,
                "email": email,
            })
        })
            .then((function(response) {
                if (response.ok) {
                    return 'Lisätty';
                } throw new Error('Lisäys ei onnistunut');
            }));
    }

    export function poistaKayttaja(id){
        return fetch(palveluurl+'/kayttaja/poista/' + id,{
        })
            .then(function (response) {
                if (response.ok){
                    return 'Poisto onnistui';
                } throw new Error ('Poisto ei onnistunut');
            })
    }


