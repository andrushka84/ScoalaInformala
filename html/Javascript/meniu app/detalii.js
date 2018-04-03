"https://restaurant-menu-v1.firebaseio.com/menu/${i}.json"


// var listaPreparate = {};

// function drawPreparate(){
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
			
// 			listaPreparate = JSON.parse(this.responseText);
			
// 			var tabel=document.querySelector("#menu tbody");
// 			var str="";
// 			for(var i in listaPreparate.menu){
// 				var rand = `<tr>
// 					<td><img src="${listaPreparate.menu[i].imagine}"></td>
// 					<td>${listaPreparate.menu[i].nume} <br/> ${listaPreparate.menu[i].ingrediente}</td>
// 					<td><button class = "detalii" href ="">DETALII</button></td>
					
// 				</tr>`;
// 				str +=rand;
// 			}
// 			console.log(str);
// 			tabel.innerHTML=str;
// 		}
// 	};
// 	xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/.json", true);
// 	xhttp.send();

// }