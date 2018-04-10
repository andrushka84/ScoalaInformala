
var index = 0;

function sterge(index){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            drawPreparate();
        }
    };
    xhttp.open("DELETE", "https://agenda-scoala-informala.firebaseio.com/"+index+"/.json", true);
    xhttp.send();

}