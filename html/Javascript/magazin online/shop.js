var listaProduse = {};
var id = 0;

function drawProduse(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
            listaProduse = JSON.parse(this.responseText);
            
            var tabel=document.querySelector("#produs tbody");
			var str="";

// **************************************************************************************************************
			// cauta cu litera mare sau mica in produse si autori

			for(var i in listaProduse){
				
				if(document.getElementById("search").value!==''&& 
				listaProduse[i].titlu.toLowerCase().indexOf(document.getElementById("search").value.toLowerCase())===-1 &&
				listaProduse[i].autor.toLowerCase().indexOf(document.getElementById("search").value.toLowerCase())===-1)
				{
									continue;
				}

				var rand = `<tr>
					<td><img class="poza" src="${listaProduse[i].imagine}"></td>
					<td class = "titlu"> ${listaProduse[i].titlu} </td> 
                    <td class= "autor"> ${listaProduse[i].autor}</td> 
					<td><button class="detalii"><a href="detalii.html?id=${i}">DETALII</a> </button></td>
					
				</tr>`;
				str +=rand;
            }
            
// ******************************************************************************************************************

			console.log(str);
			tabel.innerHTML=str;
		}
	};

	xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/.json", true);
	xhttp.send();

}