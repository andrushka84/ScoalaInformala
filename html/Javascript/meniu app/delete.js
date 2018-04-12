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

    // de vazut cum fac sa-mi arate numele preparatului
    // la var preparat ... imi da eroare loop infinit !!!!!!!!!!!!!!!!!!
    //am pus window.location = "admin.html" in loc de drawPreparateAdmin()
    
