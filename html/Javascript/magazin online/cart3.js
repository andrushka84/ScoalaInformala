var subtotal = 0;
var total =0;
var tva = 0;
var tt = 0;


function aduProdusul() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            listaProduse = JSON.parse(this.responseText);

            var poza = listaProduse.imagine;
            document.getElementById("poza").src = poza;

            var produs = listaProduse.titlu;
            document.getElementById("produs").innerHTML = produs;

            var pret = parseInt(listaProduse.pret);
            document.getElementById("pret").innerHTML = pret;

            var cantitate = parseInt(document.getElementById("cantitate").value);

            subtotal = pret * cantitate;
            document.getElementById("subtotal").innerHTML = subtotal;

            var tva = 0.19 * subtotal;
            document.getElementById("tva").innerHTML = tva;

            var total = subtotal + tva;
            document.getElementById("total").innerHTML = total;

            memoreazaCosul(event);

            deseneazaCosul();

            // calculeazaSubtotal();

        }
    };
    var id = window.location.search.substring(4);

    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/" + id + "/.json", true);
    xhttp.send();
}

// Sterge un produs din cos

function stergeProdusDinCos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
              deseneazaCosul();
        }
    }


    var id = window.location.search.substring(4);

    xhttp.open("DELETE", "https://shopping-cart-magazin-online.firebaseio.com/" + id + "/.json", true);
    xhttp.send();
}

// Actualizeaza cantitatea din cos; ar trebui sa-mi calculeze si subtotalul 

function actualizeazaCosul(elem,id) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            deseneazaCosul();
        }
    };

    xhttp.open("PUT", "https://shopping-cart-magazin-online.firebaseio.com/" + id + "/" + "cantitate" + ".json", true);
    xhttp.send(JSON.stringify(elem.value));
}




    // Memoreaza cosul atunci cand adaug mai mult de un produs

    function memoreazaCosul(event) {
        event.preventDefault();

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            }
        };

        var id = window.location.search.substring(4);


        xhttp.open("PUT", "https://shopping-cart-magazin-online.firebaseio.com/" + id + ".json", true);
        xhttp.send(JSON.stringify({

            poza: document.querySelector("#poza").src,
            produs: document.querySelector("#produs").innerHTML,
            pret: document.querySelector("#pret").innerHTML,
            cantitate: parseInt(document.querySelector("#cantitate").value),
            subtotal: document.querySelector("#subtotal").innerHTML,
            tva: document.querySelector("#tva").innerHTML,
            total: document.querySelector("#total").innerHTML,
            // id= window.location.search.substring(4),

        }));

    }


    // Deseneaza tabelul cu produsele din cos

    function deseneazaCosul() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var tabel = document.querySelector("#cart tbody");
                var str = "";
                var listaProduse = JSON.parse(this.responseText);
// *****************************************************************************

                var suma = 0;
                var total= 0;
                var tva = 0;

                for (var i in listaProduse) {
                    suma+= listaProduse[i].cantitate * listaProduse[i].pret;
                    // tva+= 0.19*suma;

// ******************************************************************************

                    var rand = `<tr>

        <td data-th="">
            <div class="col-sm-2">
                <img src=${listaProduse[i].poza} alt="" class="img-responsive" />
            </div>
        </td>

        <td data-th="Product">
                <div class="col-sm-10">${listaProduse[i].produs}</div>
        </td>

        <td data-th="Price">${listaProduse[i].pret}</td>

        <td data-th="Quantity">
            <input type="number" class="form-control text-center" value="${listaProduse[i].cantitate}" onchange="actualizeazaCosul(this,'${i}');" />
        </td>

        <td data-th="Subtotal" class="text-center">${listaProduse[i].cantitate * listaProduse[i].pret}</td>

        <td class="actions" data-th="">
           
            <button class="btn btn-danger btn-sm" id="delete" onclick="stergeProdusDinCos()">
                <i class="fas fa-trash"></i>
            </button>
        </td>
        </tr> `
                    str += rand;
                }
// ****************************************************************************************************
                // document.getElementById("subtotal").innerHTML = suma;
                document.getElementById("tva").innerHTML = suma *0.19;;
                
                var tt = suma*1.19;
                total = tt.toFixed(2);
                document.getElementById("total").innerHTML = total;

// ****************************************************************************************************

                
                console.log(str);
                tabel.innerHTML = str;
            }
        };

        xhttp.open("GET", "https://shopping-cart-magazin-online.firebaseio.com/.json", true);
        xhttp.send();
    }


    // Sterge cosul

    function stergeCosul() {

        document.querySelector("#cart").remove();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {


                document.querySelector("#wrapper").innerHTML =
                    `
              <p id="gol"> Cosul tau este gol. </p> 
              <a href="card final.html" class="btn btn-warning">
              <i class="fas fa-angle-left"></i> Continua cumparaturile</a>

            `
            }
        };



        xhttp.open("DELETE", "https://shopping-cart-magazin-online.firebaseio.com/.json", true);
        xhttp.send();

    }


    
        
    