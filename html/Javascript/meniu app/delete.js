
function stergePreparat(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.location = "admin.html";
        }
    };
    var id =window.location.search.substring(4);

    xhttp.open("DELETE", "https://menu-83f09.firebaseio.com/menu"+ id + "/.json", true);
    xhttp.send();

}

// am pus window.location = "admin.html" in loc de drawPreparateAdmin()


