
function numarComanda(){
    var comanda= Math.floor((Math.random() * 10000) + 1);
    document.getElementById("order").innerHTML = comanda;
    return comanda;
}


function iaComanda(){
    var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var tabel = document.querySelector("#cart tbody");
                    var str = "";
                    var listaProduse = JSON.parse(this.responseText);

                    for (var i in listaProduse) {
                        var rand = `<tr>

                       <td> <img src= "${listaProduse[i].poza}"/> </td>
                       <td> ${listaProduse[i].produs} </td>
                       <td>${listaProduse[i].pret}</td>
                       <td>${listaProduse[i].cantitate}</td>
                       <td>${listaProduse[i].subtotal}</td>

                       </tr>`
                    }

                }

            }

            xhttp.open("GET", "https://shopping-cart-magazin-online.firebaseio.com/.json", true);
            xhttp.send();
        }