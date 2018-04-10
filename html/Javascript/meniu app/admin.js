var listaPreparate={};
var index= 0;
var indexModificat=-1;

function drawPreparateAdmin(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			listaPreparate = JSON.parse(this.responseText);


			var tabel=document.querySelector("#preparate tbody");
			var str="";
			for(var i in listaPreparate){

				var rand = `<tr>
					<td><img src="${listaPreparate[i].imagine}"></td>
					<td>${listaPreparate[i].nume} <br/> ${listaPreparate[i].ingrediente}</td>
					<td><button> <a href="edit.html" onclick="modifica(${i})">Modifica</a></button></td>
					<td><button><a href="delete.html" onclick="sterge(${i})">Sterge</a></button></td>
				</tr>`;
				str +=rand;
			}
			console.log(str);
			tabel.innerHTML=str;
		}
	};
	xhttp.open("GET", "https://menu-83f09.firebaseio.com/.json", true);
	xhttp.send();

}

