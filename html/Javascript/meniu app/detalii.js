// "https://restaurant-menu-v1.firebaseio.com/menu/${i}.json"

var i=0;
var detaliiPreparat = {};

function drawDetalii(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var detaliiPreparat = JSON.parse(this.responseText);

			var imagine = detaliiPreparat.imagine;
			var name = detaliiPreparat.nume;
			var ingredients = detaliiPreparat.ingrediente;
			var recipe = detaliiPreparat.reteta;

			document.getElementById("poza").src = imagine;
			document.getElementById("preparat").innerHTML = name;
			document.getElementById("ingrediente").innerHTML = ingredients ;
			document.getElementById("reteta").innerHTML = recipe;

		}		
	};
	// substring(4) = incepe de la al 4 lea caracter
	// window location search = ce este dupa semnul de intrebare din url
	var id = window.location.search.substring(4);
	xhttp.open("GET", `https://restaurant-menu-v1.firebaseio.com/menu/` + id+ ".json" , true);
	xhttp.send();

}