
function modificaPreparat(form, event){
    event.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                window.location = "admin.html";
            }
        };
        var id =window.location.search.substring(4);

        xhttp.open("PUT", "https://menu-83f09.firebaseio.com/menu/" + id + ".json", true);
        xhttp.send(JSON.stringify({
            nume: form.querySelector("#name1").value,
            imagine: form.querySelector("#site1").value,
            ingrediente: form.querySelector("#ingredients1").value,
            reteta: form.querySelector("#how1").value,
        }));

    }

   
    //am pus window.location = "admin.html" in loc de drawPreparateAdmin()
