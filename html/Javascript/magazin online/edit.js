
var listaProduse = {};
function salveazaProdus(form, event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.location = "admin.html";

        }

    }

    var id = window.location.search.substring(4);
    xhttp.open("PUT", "https://magazin-online-64a15.firebaseio.com/" + id + ".json", true);
    xhttp.send(JSON.stringify({

            titlu: form.querySelector("#titlu").value,
            autor: form.querySelector("#autor").value,
            imagine: form.querySelector("#imagine").value,
            codProdus: form.querySelector("#codProdus").value,
            dataPublicarii: form.querySelector("#dataPublicarii").value,
            categorie: form.querySelector("#categorie").value,
            descriere: form.querySelector("#descriere").value,
            pret: form.querySelector("#pret").value,
    }));

}
// **************************************************************************************

function modificaProdus() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            listaProduse = JSON.parse(this.responseText);

            var title = listaProduse.titlu;
            document.getElementById("titlu").value = title;

            var author = listaProduse.autor;
            document.getElementById("autor").value = author;

            var picture = listaProduse.imagine;
            document.getElementById("imagine").value = picture;

            var code = listaProduse.codProdus;
            document.getElementById("codProdus").value = code;

            var publicationDate = listaProduse.dataPublicarii;
            document.getElementById("dataPublicarii").value = publicationDate;

            var category = listaProduse.categorie;
            document.getElementById("categorie").value = category;

            var description = listaProduse.descriere;
            document.getElementById("descriere").value = description;

            var price = listaProduse.pret;
            document.getElementById("pret").value = price;

        }
    }
    var id = window.location.search.substring(4);
    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/" + id + ".json", true);
    xhttp.send();
    // **********************************************************************
}




        // **************************************************************************************






