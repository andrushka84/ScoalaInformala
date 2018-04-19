
var listaProduse={};

function drawProduseAdmin(){
	var xhttp = new XMLHttpRequest();


	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			listaProduse = JSON.parse(this.responseText);

// ********************************************************************************************************************

		document.getElementById("loading").style.display = "none";
		document.getElementById("products").style.display = "block";

// ********************************************************************************************************************
			var tabel=document.querySelector("#products tbody");
            var str="";
            

        // de vazut cum fac cu categoriile
			for(i in listaProduse){

				var rand = `<tr>
					<td><img src="${listaProduse[i].imagine}"></td>
					<td> <span id = "fel">${listaProduse[i].titlu}</span> <br/> 
					<span id= "ing"> ${listaProduse[i].autor}</span></td>
					<td><button class="btn1"> <a href="edit.html?id=${i}">Modifica</a></button></td>
					<td><button id="btn2"><a href="delete.html?id=${i}">Sterge</a></button></td>
				</tr>`;
				str +=rand;
			}
			console.log(str);
			tabel.innerHTML=str;
		}
	};
	xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/.json", true);
	xhttp.send();

	document.getElementById("loading").style.display = "block";
	document.getElementById("products").style.display = "none";


}


