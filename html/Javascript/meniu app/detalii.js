// "https://restaurant-menu-v1.firebaseio.com/menu/${i}.json"

var detaliiPreparat = {};

function drawDetalii(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			detaliiPreparat= JSON.parse(this.responseText);
			
			var tabel=document.querySelector("#detalii tbody");
			var str="";
			for(var i in detaliiPreparat){
				var rand = `<tr>
                    <td><img src="${detaliiPreparat[i].imagine}"></td>
                    <tr/>

                    <tr>
                    <td>${detaliiPreparat[i].nume} <br/> ${detaliiPreparat[i].ingrediente}</td>
                    <tr/>

                    <tr>
                    <td>${detaliiPreparat[i].reteta}
                    </tr>`;
                    str +=rand;
			}
			console.log(str);
			tabel.innerHTML=str;
		}
	};

	xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/menu/${i}.json", true);
	xhttp.send();

}