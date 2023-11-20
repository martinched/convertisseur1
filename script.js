function convertfr() {
    var euros = document.getElementById("euros");
    const taux = 6.55957
    var resultat 

    resultat = euros.value*taux
    resultat = Number.parseFloat(resultat).toFixed(2);
    euros.value = resultat + " francs"
  }

  function converteu() {
    var francs = document.getElementById("francs");
    const taux = 6.55957
    var resultat 

    resultat = francs.value/taux
    resultat = Number.parseFloat(resultat).toFixed(2);
    francs.value = resultat + " euros"
  }

function reset() {
   euros.value = ""
    francs.value = ""
  }

