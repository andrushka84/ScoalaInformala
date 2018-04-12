
var listaPreparate={};

function drawPreparateAdmin(){
	var xhttp = new XMLHttpRequest();


	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			listaPreparate = JSON.parse(this.responseText);

// ********************************************************************************************************************

		document.getElementById("loading").style.display = "none";
		document.getElementById("preparate").style.display = "block";



// ********************************************************************************************************************
			var tabel=document.querySelector("#preparate tbody");
			var str="";
			for(i in listaPreparate){

				var rand = `<tr>
					<td><img src="${listaPreparate[i].imagine}"></td>
					<td> <span id = "fel">${listaPreparate[i].nume}</span> <br/> 
					<span id= "ing"> ${listaPreparate[i].ingrediente}</span></td>
					<td><button class="btn1"> <a href="edit.html?id=${i}">Modifica</a></button></td>
					<td><button id="btn2"><a href="delete.html?id=${i}">Sterge</a></button></td>
				</tr>`;
				str +=rand;
			}
			console.log(str);
			tabel.innerHTML=str;
		}
	};
	xhttp.open("GET", "https://menu-83f09.firebaseio.com/menu/.json", true);
	xhttp.send();

	document.getElementById("loading").style.display = "block";
	document.getElementById("preparate").style.display = "none";


}


