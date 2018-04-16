// https://irapi.bvb.ro/Trading/{SNP}/Prices/{17}

function pret() {
    if (document.getElementById("simbol").value !== null) {
        var symbol = document.getElementById("simbol").value;
        var year = 17;
        var url = "https://irapi.bvb.ro/Trading/" + "{" + symbol + "}" +"/Prices/" + "{" + year + "}" ;
        var ultimulAn = "https://irapi.bvb.ro/Trading/" + "{" + symbol + "}" + "/52weeks";
    }

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var price = JSON.parse(this.responseText);
            console.log(price);

            var pretInchidere = price.ClosePrice;










        }
}

request.open("GET", ultimulAn, true);
request.send();

}
