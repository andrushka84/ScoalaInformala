
var subtotal = 0;


function aduProdusul() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            listaProduse = JSON.parse(this.responseText);


            var poza = listaProduse.imagine;
            document.getElementById("poza").src = poza;


            var produs = listaProduse.titlu;
            document.getElementById("produs").innerHTML = produs;

            var pret = parseInt(listaProduse.pret);
            document.getElementById("pret").innerHTML = pret;

            var cantitate= parseInt(document.getElementById("cantitate").value);


            subtotal = pret * cantitate;
            document.getElementById("subtotal").innerHTML = subtotal;

            var tva = 0.19 * subtotal;
            document.getElementById("tva").innerHTML = tva;

            var total = subtotal + tva ;
            document.getElementById("total").innerHTML = total;

            // *****************************************************************************************
            

            // *****************************************************************************************

        }
    };

    var id =window.location.search.substring(4);
   

    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/"+id+"/.json", true);
    xhttp.send();
}


function stergeProdusDinCos() {

     subtotal = 0;
     document.getElementById("subtotal").innerHTML = subtotal;

     var tva = 0.19 * subtotal;
     document.getElementById("tva").innerHTML = tva;
     
     var total = subtotal + tva;
     document.getElementById("total").innerHTML = total;

     document.getElementById("loading").style.display = "none";




}


function actualizeazaCosul(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            listaProduse = JSON.parse(this.responseText);


            var poza = listaProduse.imagine;
            document.getElementById("poza").src = poza;


            var produs = listaProduse.titlu;
            document.getElementById("produs").innerHTML = produs;

            var pret = parseInt(listaProduse.pret);
            document.getElementById("pret").innerHTML = pret;

            var cantitate= parseInt(document.getElementById("cantitate").value);


            subtotal = pret * cantitate;
            document.getElementById("subtotal").innerHTML = subtotal;

            var tva = 0.19 * subtotal;
            document.getElementById("tva").innerHTML = tva;

            var total = subtotal + tva ;
            document.getElementById("total").innerHTML = total;

            // *****************************************************************************************
            

            // *****************************************************************************************

        }
    };

    var id =window.location.search.substring(4);
   

    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/"+id+"/.json", true);
    xhttp.send();
}