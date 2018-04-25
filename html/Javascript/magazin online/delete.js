var listaProduse=[];

function stergeProdus(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.location = "admin.html";
        }
    };
    var id =window.location.search.substring(4);
    

    
    xhttp.open("DELETE", "https://magazin-online-64a15.firebaseio.com/"+id+"/.json", true);
    xhttp.send();

}

function nuSterge(){
    window.location = "admin.html";

}


function aduProdusul() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            produs = JSON.parse(this.responseText);
            var nume = produs.titlu;
            document.getElementById("item").innerHTML = nume;
        }

        
    };
    var id =window.location.search.substring(4);
   

    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/"+id+"/.json", true);
    xhttp.send();

}


    //am pus window.location = "admin.html" in loc de drawPreparateAdmin()
    
