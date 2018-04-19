
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
    xhttp.open("PUT", "https://menu-83f09.firebaseio.com/menu/" + id + ".json", true);
    xhttp.send(JSON.stringify({
        nume: form.querySelector("#name1").value,
        imagine: form.querySelector("#site1").value,
        ingrediente: form.querySelector("#ingredients1").value,
        reteta: form.querySelector("#how1").value,
    }));

}
// **************************************************************************************

function modificaProdus() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            listaProduse = JSON.parse(this.responseText);

            var title = listaProduse.nume;
            document.getElementById("titlu").value = title;

            var picture = listaProduse.imagine;
            document.getElementById("imagine").value = picture;

            var author = listaProduse.ingrediente;
            document.getElementById("ingredients1").innerHTML = author;

            var description = listaProduse.reteta;
            document.getElementById("descriere").innerHTML = description;

            var publicationDate = listaProduse.dataPublicarii;
            document.getElementById("dataPublicarii").innerHTML = publicationDate;

            var code = listaProduse.reteta;
            document.getElementById("codProdus").innerHTML = code;

        }
    }
    var id = window.location.search.substring(4);
    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/" + id + ".json", true);
    xhttp.send();
    // **********************************************************************
}




        // **************************************************************************************






    //am pus window.location = "admin.html" in loc de drawlistaProduseeAdmin()
