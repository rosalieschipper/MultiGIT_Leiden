window.onload = function(){
<<<<<<< HEAD
    var m = localStorage.getItem('maaltijdenarray');
========
    geefdatum();
    
    document.getElementById("uitkomstGebruiker").innerHTML = localStorage.getItem("deNaam"); //INLOG NIEUW
    var m = localStorage.getItem('maaltijdenarray');
    //alert(m);
>>>>>>> master
    if(m !== undefined){
        maaltijden = JSON.parse(m);
    }
}

<<<<<<< HEAD
function 

function etenladen(){
    
=========
function naamOpslaan(){ //INLOG NIEUW
    var invoerGebruiker = document.getElementById("inputnaam").value;
    document.getElementById("uitkomstGebruiker").innerHTML = invoerGebruiker;
    localStorage.setItem("deNaam", invoerGebruiker);
    var ophalen = localStorage.getItem("deNaam");
    document.getElementById("uitkomstGebruiker").innerHTML = ophalen;
}

/*function etenladen(){
>>>>>>> master
    var dag1 = {
        naamcateraar: document.getElementById("cateraar").value,
        aantalbroodjes: document.getElementById("aantalBroodjes").value,
        soortbeleg: document.getElementById("soortBeleg").value,
        drank: document.getElementById("dranken").value,
        bestek: document.getElementById("typeBestek").value,
        extra: document.getElementById("extra").value,
        datum: document.getElementById("datum").value
    }
<<<<<<< HEAD
    alert(dag1.naamcateraar);
========
    //alert(dag1.naamcateraar);
>>>>>>> master
    maaltijden.push(dag1);
    console.log(maaltijden);
    var eindString = "";
    for(var x = 0; x < maaltijden.length; x ++){
        eindString += "<tr><td>" + maaltijden[x].naamcateraar + "</td><td>" + 
                            maaltijden[x].aantalbroodjes + "</td><td>" + 
                            maaltijden[x].soortbeleg + "</td><td>" + 
                            maaltijden[x].drank + "</td><td>" + 
                            maaltijden[x].bestek + "</td><td>" + 
                            maaltijden[x].extra + "</td><td>" + 
                            maaltijden[x].datum + "</td></tr>";
    }
    document.getElementById("deLunch").innerHTML = eindString;
<<<<<<< HEAD
========
    //alert("string: " + eindString);
    var maaltijdenjson = JSON.stringify(maaltijden);
    localStorage.setItem('maaltijdenarray', maaltijdenjson);
}*/

function inputeten(){
    var dag1 = {
        naamcateraar: document.getElementById("cateraar").value,
        aantalbroodjes: document.getElementById("aantalBroodjes").value,
        soortbeleg: document.getElementById("soortBeleg").value,
        drank: document.getElementById("dranken").value,
        bestek: document.getElementById("typeBestek").value,
        extra: document.getElementById("extra").value,
        datum: document.getElementById("datum").value
    }
    maaltijden.push(dag1);
    document.getElementById("deLunch").innerHTML = tabelmaaltijdenmaken(maaltijden);
}

function maakmaaltijdstring(maaltijdenarray, maaltijdenjson){
>>>>>>> master
    var maaltijdenjson = JSON.stringify(maaltijden);
    localStorage.setItem('maaltijdenarray', maaltijdenjson);
}

<<<<<<< HEAD
var maaltijden = [];


========
function tabelmaaltijdenmaken(maaltijden){
    var eindString = "";
    for(var x = 0; x < maaltijden.length; x ++){
        eindString += "<tr><td>" + maaltijden[x].naamcateraar + "</td><td>" + 
                            maaltijden[x].aantalbroodjes + "</td><td>" + 
                            maaltijden[x].soortbeleg + "</td><td>" + 
                            maaltijden[x].drank + "</td><td>" + 
                            maaltijden[x].bestek + "</td><td>" + 
                            maaltijden[x].extra + "</td><td>" + 
                            maaltijden[x].datum + "</td></tr>";
    }
    return eindString;
}

function etenophalen(){
    document.getElementById("deLunch").innerHTML = tabelmaaltijdenmaken(maaltijden);
}


var maaltijden = [];

>>>>>>> master
function deMaaltijd(){
        var lunch1 = {
            datum : "15-04-2019",
            weekdag : "Maandag",
            beoordeling : "7"
        };
        var lunch2 = {
            datum : "16-04-2019",
            weekdag : "Dinsdag",
            beoordeling : "4"
        };
        var lunch3 = {
            datum : "17-04-2019",
            weekdag : "Woensdag",
            beoordeling : "6"
        };
<<<<<<< HEAD
        var lunch4 = {
            datum : "17-04-2019",
            weekdag : "Woensdag",
            beoordeling : "6"
        };
        var maaltijden = [lunch1, lunch2, lunch3, lunch4];
========
        var maaltijden = [lunch1, lunch2, lunch3];
>>>>>>> master
            return maaltijden;
        }
        
function array(){
        var lunches = deMaaltijd();
        var text = "";
        var y;
        var table;
        for(y=0; y<lunches.length; y++){
            table = document.getElementById("weekoverzicht");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = lunches[y].datum; 
            var cell2 = row.insertCell(-1);
            cell2.innerHTML = lunches[y].weekdag;
            var cell3 = row.insertCell(-1);
            cell3.innerHTML = lunches[y].beoordeling; 
        }
    }

function beoordeel(){
    var cijfergeven = document.getElementById("cijfer").value;
    document.getElementById("uitkomst").innerHTML = "Jouw cijfer: " + cijfergeven + " Bedankt voor het doorgeven!";
    }

function previewLunchFoto(event){
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('output_image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    }

function geefAantalBroodjes(){
    var aantalBroodjes = localStorage.getItem('');
    document.getElementById("aantalbroodjes").innerHTML;
}

function geefdatum(){
    var vandaag = new Date();
    var dag = vandaag.getDate();
    var dag2 = ((dag < 10) ? "0" : "") + dag;
    var maand = vandaag.getMonth() + 1;
    var maand2 = ((maand < 10) ? "0" : "") + maand;
    var jaar = vandaag.getYear();
    var jaar4 = ((jaar < 1900) ? (jaar + 1900) : (jaar));
    document.getElementById("datumdiv").innerHTML = dag2 + "-" + maand2 + "-" + jaar4;
}
<<<<<<< HEAD
function tabel(){
    var body = document.getElementsByClassName("column")[0];
    var tabel = document.createElement("table");
    var tabelBody = document.createElement("tbody");

    for (var r=0 ; r < 4 ; r++){
        var rij = document.createElement("tr");
        for (c=0 ; c < 3 ; c++){
            var cell = document.createElement("td");
            var tekst = document.createTextNode("test");
            cell.appendChild(tekst);
            rij.appendChild(cell);
        }
        tabelBody.appendChild(rij);
    }
    tabel.appendChild(tabelBody);
    body.appendChild(tabel);
    tabel.setAttribute("border", "2");
========

function lala(lunchinhoud){
    var y = localStorage.getItem("maaltijdenarray");
    alert(y);
    document.getElementById("deLunch").innerHTML = y;
>>>>>>> master
}