var i = 0;
var detaliiProdus = {};
var picture ="";

function drawDetalii(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			detaliiProdus = JSON.parse(this.responseText);

			picture = detaliiProdus.imagine;
			var title = detaliiProdus.titlu;
			var author = detaliiProdus.autor;
            var description = detaliiProdus.descriere;
            var date = detaliiProdus.dataPublicarii;
            // var productCode = detaliiProdus.codProdus;

			
			document.getElementById("imagine").src = picture;
			document.getElementById("titlu").innerHTML = title;
			document.getElementById("autor").innerHTML = author;
            document.getElementById("descriere").innerHTML = description;
            document.getElementById("data").innerHTML = date;
            // document.getElementById("codProdus").innerHTML = productCode;

            
            for(var i in detaliiProdus){	
                detaliiProdus[i].id = i;
               }
   
   
           }		
       };
       // substring(4) = incepe de la al 4 lea caracter
       // window location search = ce este dupa semnul de intrebare din url
       var numar = window.location.search.substring(4);
       xhttp.open("GET", `https://magazin-online-64a15.firebaseio.com/` + numar + ".json" , true);
       xhttp.send();
   
   }
   