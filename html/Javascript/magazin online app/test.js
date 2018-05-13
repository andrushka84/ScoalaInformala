var listaProduseCos = {};

function drawProduseCos(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			listaProduseCos = JSON.parse(this.responseText);

			var tabel=document.querySelector("#cart tbody");
			var str="";

			for(var i in listaProduseCos){
	
				var rand = `<tr>
					<td><img class="poza" src="${listaProduseCos[i].imagine}"></td>
					<td class = "nume"> ${listaProduseCos[i].nume} </td> 
					<td class= "ingrediente"> ${listaProduseCos[i].ingrediente}</td> 
					
				</tr>`;
				str +=rand;
			}
			console.log(str);
			tabel.innerHTML=str;
		}
	};

	xhttp.open("GET", "https://shopping-cart-magazin-online.firebaseio.com/.json", true);
	xhttp.send();

}


