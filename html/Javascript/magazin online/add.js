
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
            autor: form.querySelector("#autor").value,
            imagine: form.querySelector("#imagine").value,
            codProdus: form.querySelector("#codProdus").value,
            dataPublicarii: form.querySelector("#dataPublicarii").value,
            categorie: form.querySelector("#categorie").value,
            descriere: form.querySelector("#descriere").value,
            pret: form.querySelector("#pret").value,
            


        }));

    }



