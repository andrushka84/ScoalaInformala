var listaPreparate=[];

function stergePreparat(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.location = "admin.html";
        }
    };
    var id =window.location.search.substring(4);
    
    // *******************************************************************************************
    // var preparat = listaPreparate.nume;
    // document.getElementById("preparat").innerHTML = preparat;
    // *******************************************************************************************
    
    xhttp.open("DELETE", "https://menu-83f09.firebaseio.com/menu/"+id+"/.json", true);
    xhttp.send();

}

function nuSterge(){
    window.location = "admin.html";

}


function iaPreparat() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            preparat = JSON.parse(this.responseText);
            var nume = preparat.nume;
            document.getElementById("mancare").innerHTML = nume;
        }

        
    };
    var id =window.location.search.substring(4);
   

    xhttp.open("GET", "https://menu-83f09.firebaseio.com/menu/"+id+"/.json", true);
    xhttp.send();

}


    // de vazut cum fac sa-mi arate numele preparatului
    //am pus window.location = "admin.html" in loc de drawPreparateAdmin()
    
