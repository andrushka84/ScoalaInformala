
var listaProduse={};

function drawProduseAdmin(){
	var xhttp = new XMLHttpRequest();


	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			listaProduse = JSON.parse(this.responseText);

// ********************************************************************************************************************
		var card = document.querySelector(".row");

		// document.getElementById("loading").style.display = "none";
		// document.getElementsByClassName("row").style.display = "block";

// ********************************************************************************************************************
		var str="";
					

        // de vazut cum fac cu categoriile
			for(i in listaProduse){

				var rand = `

				<div class="col-xs-12 col-12 col-md-6 col-lg-3"> 

                    <div class="card">
                        <img class="card-img-top" src="${listaProduse[i].imagine}" alt="">
                    <div class="card-body">
                        <p class="price">
                            <span class="pret"> ${listaProduse[i].pret} lei</span>
                        </p>
                        <br/>
                        <h5 class="card-title">${listaProduse[i].titlu}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${listaProduse[i].autor}</h6>
                        <br/>
                        <p class=" description text-muted text-truncate"> ${listaProduse[i].descriere}
                        </p>
					   
						<button class="btn1"> <a href="edit.html?id=${i}">Modifica</a></button>
						<button id="btn2"><a href="delete.html?id=${i}">Sterge</a></button>
                                 
                        </div>
                        </div>
                        </div>


                        `;

				str +=rand;
			}
			console.log(str);
			card.innerHTML = str;
		}
	};
	xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/.json", true);
	xhttp.send();

	// document.getElementById("loading").style.display = "block";
	// document.getElementsByClassName("row").style.display =  "none";


}


