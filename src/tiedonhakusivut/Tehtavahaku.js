const tehtavaUrl = 'https://taskuri.herokuapp.com/tehtava'

export function haeKayttajanTehtavat(kayttajaId) {
  return fetch(tehtavaUrl + '/' + kayttajaId, {
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
      'nimi': this.state.nimi,
      'kuvaus': this.state.kuvaus,
      'pisteet': this.state.pisteet,
      'deadline': this.state.deadline,
      'lammas': this.state.lammas
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
      'nimi': this.state.nimi,
      'kuvaus': this.state.kuvaus,
      'pisteet': this.state.pisteet,
      'deadline': this.state.deadline,
      'lammas': this.state.lammas
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

export function haeKayttajanTekematTehtavat(kayttajaId) {
  return fetch(tehtavaUrl+ '/suoritetut/' + kayttajaId, {
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ongelmia tiedonhaussa');
    })
}

export function haePerheessaTehdytTehtavat(ryhmaId) {
  return fetch(tehtavaUrl+ '/' + ryhmaId + '/suoritetut', {
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ongelmia tiedonhaussa');
    })
}