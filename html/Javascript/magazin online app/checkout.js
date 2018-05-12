
function numarComanda(){
    var comanda= Math.floor((Math.random() * 10000) + 1);
    document.getElementById("order").innerHTML = comanda;
    checkout();

    return comanda;
}


function checkout(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
        }
    }

    xhttp.open("DELETE", "https://shopping-cart-magazin-online.firebaseio.com/.json", true);
    xhttp.send();

}

