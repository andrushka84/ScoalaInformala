
function adaugaPreparat(form, event){
    event.preventDefault();
    
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                window.location = "admin.html";
            }
        };
        
        xhttp.open("POST", "https://menu-83f09.firebaseio.com/menu/.json", true);
        xhttp.send(JSON.stringify({
            nume: form.querySelector("#name").value,
            imagine: form.querySelector("#site").value,
            ingrediente: form.querySelector("#ingredients").value,
            reteta: form.querySelector("#how").value,
        }));

    }


    //am pus window.location = "admin.html" in loc de drawPreparateAdmin()

