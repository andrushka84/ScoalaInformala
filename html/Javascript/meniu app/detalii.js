
var i = 0;
var detaliiPreparat = {};
var imagine ="";

function drawDetalii(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			detaliiPreparat = JSON.parse(this.responseText);

			imagine = detaliiPreparat.imagine;
			var name = detaliiPreparat.nume;
			var ingredients = detaliiPreparat.ingrediente;
			var recipe = detaliiPreparat.reteta;

			
			document.getElementById("imagine").src = imagine;
			document.getElementById("preparat").innerHTML = name;
			document.getElementById("ingrediente").innerHTML = ingredients;
			document.getElementById("reteta").innerHTML = recipe;

			
			// detaliiPreparat[0].imagine="http://www.papamond.ro/wp-content/uploads/2016/11/Pastrama-de-Berbecut-2.jpg";
			// detaliiPreparat[1].imagine="https://www.bucataras.ro/uploads/modules/news/59549/656x440_chiftelute-marinate-314465.jpg";
			// detaliiPreparat[2].imagine="https://retetefeldefel.ro/wp-content/uploads/2015/02/fasole-batuta-013.jpg";
			// detaliiPreparat[3].imagine="http://www.deliciisizambete.ro/DeliciiSiZambete/wp-content/uploads/2016/10/pulpa-de-rata-la-cuptor.jpg";
			// detaliiPreparat[4].imagine="http://www.iretete.ro/wp-content/uploads/2013/02/cotlet-de-berbecut.jpg";
			// detaliiPreparat[5].imagine="http://www.lactag.ro/wp-content/uploads/2016/09/0046_CARNATI-MACELARESTI-300x300.jpg";
			// detaliiPreparat[6].imagine="http://www.casamuresana.ro/wp-content/uploads/cesar_salata-520x390.jpg";
			// detaliiPreparat[7].imagine="https://www.bucataras.ro/uploads/modules/news/67861/656x440_jumari-cu-ceapa-362003.jpg";
			// detaliiPreparat[8].imagine="https://pofta-buna.com/wp-content/uploads/2015/12/Carne-prajita-in-untura-la-garnita-pofta-buna-cu-gina-bradea-6.jpg";
			// detaliiPreparat[9].imagine="http://gastropedia.ro/wp-content/uploads/2012/05/salata_icre.jpg";
			// detaliiPreparat[10].imagine="https://www.bucataras.ro/uploads/modules/news/59046/656x440_saramura-de-peste-cu-legume-311059.jpg";
			// detaliiPreparat["-KwPAvBToUdP7-TriCr4"].imagine="http://www.papabun.com/wp-content/poze/Clatite-cu-Nuci-si-Smantana.jpg"
			// detaliiPreparat["-KwPAvBToUdP7-TriCr4"].nume="clatite cu nuci si smantana";
			// detaliiPreparat["-KwPAvBToUdP7-TriCr4"].ingrediente="lapte, oua, faina, nuci, smantana";

			
			for(var i in detaliiPreparat){	
			 detaliiPreparat[i].id = i;
			}


		}		
	};
	// substring(4) = incepe de la al 4 lea caracter
	// window location search = ce este dupa semnul de intrebare din url
	var numar = window.location.search.substring(4);
	xhttp.open("GET", `https://restaurant-menu-v1.firebaseio.com/menu/` + numar + ".json" , true);
	xhttp.send();

}

			