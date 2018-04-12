var listaPreparate = {};
var id = 0;

function drawPreparate(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			listaPreparate = JSON.parse(this.responseText);

			listaPreparate.menu[0].imagine="http://www.papamond.ro/wp-content/uploads/2016/11/Pastrama-de-Berbecut-2.jpg";
			listaPreparate.menu[1].imagine="https://www.bucataras.ro/uploads/modules/news/59549/656x440_chiftelute-marinate-314465.jpg";
			listaPreparate.menu[2].imagine="https://retetefeldefel.ro/wp-content/uploads/2015/02/fasole-batuta-013.jpg";
			listaPreparate.menu[3].imagine="http://www.deliciisizambete.ro/DeliciiSiZambete/wp-content/uploads/2016/10/pulpa-de-rata-la-cuptor.jpg";
			listaPreparate.menu[4].imagine="http://www.iretete.ro/wp-content/uploads/2013/02/cotlet-de-berbecut.jpg";
			listaPreparate.menu[5].imagine="http://www.lactag.ro/wp-content/uploads/2016/09/0046_CARNATI-MACELARESTI-300x300.jpg";
			listaPreparate.menu[6].imagine="http://www.casamuresana.ro/wp-content/uploads/cesar_salata-520x390.jpg";
			listaPreparate.menu[7].imagine="https://www.bucataras.ro/uploads/modules/news/67861/656x440_jumari-cu-ceapa-362003.jpg";
			listaPreparate.menu[8].imagine="https://pofta-buna.com/wp-content/uploads/2015/12/Carne-prajita-in-untura-la-garnita-pofta-buna-cu-gina-bradea-6.jpg";
			listaPreparate.menu[9].imagine="http://gastropedia.ro/wp-content/uploads/2012/05/salata_icre.jpg";
			listaPreparate.menu[10].imagine="https://www.bucataras.ro/uploads/modules/news/59046/656x440_saramura-de-peste-cu-legume-311059.jpg";
			listaPreparate.menu["-KwPAvBToUdP7-TriCr4"].imagine="http://www.papabun.com/wp-content/poze/Clatite-cu-Nuci-si-Smantana.jpg"
			listaPreparate.menu["-KwPAvBToUdP7-TriCr4"].nume ="clatite cu nuci si smantana";
			listaPreparate.menu["-KwPAvBToUdP7-TriCr4"].ingrediente ="lapte, oua, faina, nuci, smantana";
			listaPreparate.menu["-L9uxD_ggdGYdIcWhNFB"].imagine="http://clickpoftabuna.ro/wp-content/uploads/2015/10/tort-cu-ciocolata-si-rom-580x400.jpg"
			listaPreparate.menu["-L9uxD_ggdGYdIcWhNFB"].nume ="tort cu ciocolata";
			listaPreparate.menu["-L9uxD_ggdGYdIcWhNFB"].ingrediente ="lapte, oua, faina, nuci, smantana, ciocolata";

			var tabel=document.querySelector("#menu tbody");
			var str="";

			for(var i in listaPreparate.menu){
				
				 listaPreparate.menu[i].id = i;

				if (document.getElementById("search").value!==''&& 
				listaPreparate.menu[i].ingrediente.indexOf(document.getElementById("search").value)===-1)
				{
									continue;
	
				}

				var rand = `<tr>
					<td><img class="poza" src="${listaPreparate.menu[i].imagine}"></td>
					<td class = "nume"> ${listaPreparate.menu[i].nume} </td> 
					<td class= "ingrediente"> ${listaPreparate.menu[i].ingrediente}</td> 
					<td><button class="detalii"><a href="detalii.html?id=${i}">DETALII</a> </button></td>
					
				</tr>`;
				str +=rand;
			}
			console.log(str);
			tabel.innerHTML=str;
		}
	};

	xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/.json", true);
	xhttp.send();

}


