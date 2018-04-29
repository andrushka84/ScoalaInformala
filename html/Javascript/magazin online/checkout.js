
function numarComanda(){
    var comanda= Math.floor((Math.random() * 10000) + 1);
    document.getElementById("order").innerHTML = comanda;
    return comanda;
}


