'use strict';

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    var kapital;
    var oprocentowanieOpodatkowane;
    
    if (podatek) {
        oprocentowanieOpodatkowane = oprocentowanie / 1.19; // Belka
    }
    else {
        oprocentowanieOpodatkowane = oprocentowanie;
    }
    
    kapital = wplata * Math.pow(1 + oprocentowanieOpodatkowane / okresKapitalizacji, iloscLat * okresKapitalizacji);
    
    return kapital.toFixed(2);
}

function oblicz() {
    var wplata = parseInt(document.getElementById("wplata").value);
    var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
    var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);
    var oprocentowanie = parseFloat(document.getElementById("oprocentowanie").value) / 100;
    var podatek = document.getElementById("podatek").checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    document.getElementById("wynik").innerHTML = "Kapitał wynosi <b>" + wynik + " zł</b>";
}

