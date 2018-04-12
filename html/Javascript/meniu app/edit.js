
var preparat = {};
function salveazaPreparat(form, event) {
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

function modificaPreparat() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            preparat = JSON.parse(this.responseText);

            var nume = preparat.nume;
            document.getElementById("name1").value = nume;

            var imagine = preparat.imagine;
            document.getElementById("site1").value = imagine;

            var ingrediente = preparat.ingrediente;
            document.getElementById("ingredients1").innerHTML = ingrediente;

            var reteta = preparat.reteta;
            document.getElementById("how1").innerHTML = reteta;

        }
    }
    var id = window.location.search.substring(4);
    xhttp.open("GET", "https://menu-83f09.firebaseio.com/menu/" + id + ".json", true);
    xhttp.send();
    // **********************************************************************
}




        // **************************************************************************************






    //am pus window.location = "admin.html" in loc de drawPreparateAdmin()
