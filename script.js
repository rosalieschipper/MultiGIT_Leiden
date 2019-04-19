/*

function naamOpslaan(){ //INLOG NIEUW
    var invoerGebruiker = document.getElementById("inputnaam").value;
    document.getElementById("uitkomstGebruiker").innerHTML = invoerGebruiker;
    localStorage.setItem("deNaam", invoerGebruiker);
    var ophalen = localStorage.getItem("deNaam");
    document.getElementById("uitkomstGebruiker").innerHTML = ophalen;
}
*/
/*
window.onload = function(){
    geefdatum();
    
    document.getElementById("uitkomstGebruiker").innerHTML = localStorage.getItem("deNaam"); //INLOG NIEUW
    var m = localStorage.getItem('maaltijdenarray');
    //alert(m);
    if(m !== undefined){
        maaltijden = JSON.parse(m);
    }
}
*/
function startCateraarOverzicht(){
    vulCateraarDropDown();
    lala();
   maaltijden = JSON.parse(localStorage.getItem("maaltijdenarray"));
}

function vulCateraarDropDown(){
    var cateraars = localStorage.getItem("opgeslagenCat");
    var cateraarsObject = JSON.parse(cateraars);
    var eindString = "";
    for(var x = 0; x < cateraarsObject.length ; x++){
        eindString += "<option>"+ cateraarsObject[x].Naam +"</option>";
    }
    document.getElementById("lunchMan").innerHTML = eindString;
}

function startRecencentOverzicht(){
    document.getElementById("uitkomstGebruiker").innerHTML = localStorage.getItem("deNaam");
    var m = localStorage.getItem('maaltijdenarray');
    if(m !== undefined){
        maaltijden = JSON.parse(m);
    }
    lala();
    maaltijden = JSON.parse(localStorage.getItem("maaltijdenarray"));
}

function inputeten(){
    var dag1 = {
        naamcateraar: document.getElementById("lunchMan").value,
        aantalbroodjes: document.getElementById("aantalBroodjes").value,
        soortbeleg: document.getElementById("soortBeleg").value,
        drank: document.getElementById("dranken").value,
        bestek: document.getElementById("typeBestek").value,
        extra: document.getElementById("extra").value,
        datum: document.getElementById("datum").value
    }
    maaltijden.push(dag1);
    document.getElementById("deLunch").innerHTML = tabelmaaltijdenmaken(maaltijden);
    maakmaaltijdstring();

}

function maakmaaltijdstring(){
    var maaltijdenjson = JSON.stringify(maaltijden);
    localStorage.setItem('maaltijdenarray', maaltijdenjson);
}

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

function lala(lunchinhoud){
    var y = JSON.parse(localStorage.getItem("maaltijdenarray"));
    console.log(y);
    document.getElementById("deLunch").innerHTML = tabelmaaltijdenmaken(y);
}

function cateraarInfo(){ //NEW
    var catering = document.getElementById("cateraarNaam").value;
    var stad = document.getElementById("cateraarStad").value;
    var id = document.getElementById("cateraarId").value;
    var cateraarObject = {};
    cateraarObject.Naam = catering;
    cateraarObject.Stad = stad;
    cateraarObject.Id = id;
    cateraars.push(cateraarObject);
    var cateraarsJSON = JSON.stringify(cateraars);
    localStorage.setItem("opgeslagenCat",cateraarsJSON);
    console.log(cateraars);
}
var cateraars = []; //NEW

function lunchtabellinksinformatie(){
    /*var lunch = {
        naamcateraar: document.getElementById("cateraar").value,
        aantalbroodjes: document.getElementById("aantalBroodjes").value,
        soortbeleg: document.getElementById("soortBeleg").value,
        drank: document.getElementById("dranken").value,
        bestek: document.getElementById("typeBestek").value,
        extra: document.getElementById("extra").value,
        datum: document.getElementById("datum").value
    }*/
    var lunch1 = {
        naamcateraar: "Downies & Brownies",
        aantalbroodjes: 5,        
        soortbeleg: "kaas",
        drank: "water",
        bestek: "hout",
        extra: "choco",
        datum: "15-04-2019"
    }
    var lunch2 = {
        naamcateraar: "D&B",
        aantalbroodjes: 15,        
        soortbeleg: "ham",
        drank: "melk",
        bestek: "plastic",
        extra: "appel",
        datum: "18-04-2019"
    }
    var lunches = [lunch1, lunch2];
    return lunches;
    //var x = document.getElementById("")
}

function lunchdetailsoproepen(waarde){
    var lunch = lunchtabellinksinformatie();
    var text = "";
    var y;
    var table;
    if (waarde == 0){
        y = 0;
    }
    if(waarde == 1){
        y = 1;
    }
    table = document.getElementById("lunchdetails");
    document.getElementById("cateraarnaam").innerHTML = lunch[y].naamcateraar;
    document.getElementById("aantalBroodjes").innerHTML = lunch[y].aantalbroodjes;
    document.getElementById("soortBeleg").innerHTML = lunch[y].soortbeleg;
    document.getElementById("dranken").innerHTML = lunch[y].drank;
    document.getElementById("typeBestek").innerHTML = lunch[y].bestek;
    document.getElementById("extra").innerHTML = lunch[y].extra;
    document.getElementById("datum").innerHTML = lunch[y].datum;
}