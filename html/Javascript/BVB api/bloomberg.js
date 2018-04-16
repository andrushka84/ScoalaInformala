
var listaPreturi = {};

function pret() {
    if (document.getElementById("simbol").value !== null) {
        var symbol = document.getElementById("simbol").value;
        var url = "https://www.bloomberg.com/markets/api/bulk-time-series/price/" + symbol + "?timeFrame=5_YEAR" ;
    }

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
             listaPreturi = JSON.parse(this.responseText);
            console.log(listaPreturi);


            var tabel=document.querySelector("#table tbody");
            var str="";
            
			for(i in listaPreturi){

				var rand = `<tr>
                <td>${listaPreturi[i].price[i].value}</td>
				</tr>`;
				str +=rand;
			}
			console.log(str);
            tabel.innerHTML=str;
            s
        }
    }

    request.open("GET", url, true);
    request.send();

}


