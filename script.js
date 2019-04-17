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
        var maaltijden = [lunch1, lunch2, lunch3];
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

    function opslaan(){
        var lunch = document.getElementById("lunch").value;
        var aantalBroodjes = document.getElementById("aantalBroodjes").value;
        var soortBeleg = document.getElementById("soortBeleg").value;
        var drank = document.getElementById("dranken").value;
        var bestek = document.getElementById("typeBestek").value;
        var extra = document.getElementById("extra").value
        var datum = document.getElementById("datum").value;
        alert(  "Cateraar: " + lunch + "\nAantal broodjes: " + aantalBroodjes + "\nBeleg: " + soortBeleg + "\nDranken: " + drank + "\nType bestek: " + bestek + "\nExtra: " + extra + "\nDatum: " + datum);
    }

    var dag1 = {
        naamcateraar: "McDonalds",
        aantalbroodjes: 10,
        soortbeleg: "vlees, veggie, vis",
        drank: "coca cola, sinas",
        bestek: "plastic",
        extra: "McFlurry",
        datum: "15/04/2019"
    }

    function probeersel(){
        alert(dag1.naamcateraar);
    }