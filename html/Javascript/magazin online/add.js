
function adaugaProdus(form, event){
    event.preventDefault();
    
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                window.location = "admin.html";
            }
        };
        
        xhttp.open("POST", "https://magazin-online-64a15.firebaseio.com/.json", true);
        xhttp.send(JSON.stringify({
            titlu: form.querySelector("#titlu").value,
            imagine: form.querySelector("#imagine").value,
            autor: form.querySelector("#autor").value,
            descriere: form.querySelector("#descriere").value,
            data: form.querySelector("#data").value,
            cod: form.querySelector("#codProdus").value,
        }));

    }


    //am pus window.location = "admin.html" in loc de drawPreparateAdmin()

