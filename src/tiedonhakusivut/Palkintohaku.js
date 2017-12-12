const palkintoUrl = 'https://taskuri.herokuapp.com/palkinto'

export function haeAvoimetPalkinnot(kayttajaId) {
  return fetch(palkintoUrl+ '/'+ kayttajaId + '/avoimet', {
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ongelmia tiedonhaussa');
    })
}

export function haeLukitutPalkinnot(kayttajaId) {
  return fetch(palkintoUrl + '/' + kayttajaId + '/lukitut', {
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ongelmia tiedonhaussa');
    })
}

export function haeKaikkiPerheenPalkinnot(ryhmaId) {
  return fetch(palkintoUrl+'/'+ryhmaId + '/kaikki', {
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ongelmia tiedonhaussa');
    })
}

export function haePerheenLunastetut(ryhmaId) {
  return fetch(palkintoUrl+'/'+ryhmaId+'/lunastetut', {
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ongelmia tiedonhaussa');
    })
}

export function haeKayttajanLunastamat(kayttajaId) {
  return fetch(palkintoUrl+'/lunastetut/' +kayttajaId, {
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ongelmia tiedonhaussa');
    })
}

export function poistaPalkinto(palkintoId) {
  return fetch(palkintoUrl+'/poista/'+palkintoId, {
    method: 'DELETE',
  })
    .then((function(response) {
      if (response.ok) {
        return 'Muutokset onnistuivat';
      } throw new Error('Muutokset epäonnistuivat')
    }))
}

export function muokkaaPalkintoa(palkintoId) {
  return fetch(palkintoUrl+'/muokkaa/'+palkintoId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify({
      'id': this.state.id,
      'nimi': this.state.nimi,
      'kuvaus': this.state.kuvaus,
      'arvo': this.state.arvo,
      'ryhmaId': this.state.ryhmaId
    })
  })
    .then((function(response) {
      if (response.ok) {
        alert('Muutokset onnistuivat');
      } throw new Error('Muutokset epäonnistuivat')
    }))
}

export function lisaaPalkinto(nimi, kuvaus, arvo, ryhmaId) {
  return fetch(palkintoUrl+'/lisaa', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nimi, kuvaus, arvo, ryhmaId)
  })
    .then((function(response) {
      if (response.ok) {
        alert('Palkinto lisätty');
      } throw new Error('Lisäys ei onnistunut');
    }));
}

export function lunastaPalkinto(kayttajaId, palkintoId) {
  return fetch(palkintoUrl+'/'+ kayttajaId + '/lunasta/' + palkintoId, {
    method: 'PUT',
  })
    .then((function(response) {
      if (response.ok) {
        alert('Muutokset onnistuivat');
      } throw new Error('Muutokset epäonnistuivat')
    }))
}




