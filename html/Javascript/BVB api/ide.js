function drawTabel(){

    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			listaSimboluri = JSON.parse(this.responseText);

            var tabel=document.querySelector("#stock tbody");
            var str="";
            
            for(var i in listaSimboluri){
				
               var rand = `<tr>

                   <td class = "simbol"> ${listaSimboluri[i].symbol} </td> 
                   <td class = "nume"> ${listaSimboluri[i].companyName} </td> 
                   <td class = "bursa"> ${listaSimboluri[i].primaryExchange} </td> 
                   <td class = "sector"> ${listaSimboluri[i].sector} </td> 
                   <td class = "data"> ${listaSimboluri[i].closeTime} </td> 
                   <td class = "inchidere"> ${listaSimboluri[i].close} </td> 
                   <td class = "capitalizare"> ${listaSimboluri[i].marketCap} </td> 
                   <td class = "change"> ${listaSimboluri[i].change} </td> 
                   <td class = "percentageChange"> ${listaSimboluri[i].changePercent} </td> 
                   <td class = "ytd"> ${listaSimboluri[i].ytdChange} </td> 

               </tr>`;

               str +=rand;
           }
           
           console.log(str);
           tabel.innerHTML=str;

        }   

    }


// curios ca aici nu merge .json la GET, imi da null daca pun .json la capat
    xhttp.open("GET", "https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote", true);
	xhttp.send();

}


