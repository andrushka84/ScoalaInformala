
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
            memoreazaCosul(event);

            // *****************************************************************************************
            deseneazaCosul();
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


    function memoreazaCosul(event){
        event.preventDefault();
        
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                }
            };
            
            xhttp.open("POST", "https://shopping-cart-magazin-online.firebaseio.com/.json", true);
            xhttp.send(JSON.stringify({

                poza: document.querySelector("#poza").src,
                produs: document.querySelector("#produs").innerHTML,
                pret: document.querySelector("#pret").innerHTML,
                cantitate: document.querySelector("#cantitate").value,
                subtotal: document.querySelector("#subtotal").innerHTML,
                tva: document.querySelector("#tva").innerHTML,
                total: document.querySelector("#total").innerHTML,

            }));
    
        }
    
function deseneazaCosul(){

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            listaProduse = JSON.parse(this.responseText);



            // *****************************************************************************************

            // *****************************************************************************************

        }
    };

    xhttp.open("GET", "https://shopping-cart-magazin-online.firebaseio.com/.json", true);
    xhttp.send();


}


function stergeCosul(){


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            listaProduse = JSON.parse(this.responseText);



        }
    };

    xhttp.open("DELETE", "https://shopping-cart-magazin-online.firebaseio.com/.json", true); 
    xhttp.send();
}