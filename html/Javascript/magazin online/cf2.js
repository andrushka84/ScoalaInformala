function drawProduse() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var listaProduse = JSON.parse(this.responseText);


            var card = document.querySelector(".card");
            var str = "";

            for (var i in listaProduse) {

                if (document.getElementById("search").value !== '' &&
                    listaProduse[i].titlu.toLowerCase().indexOf(document.getElementById("search").value.toLowerCase()) === -1 &&
                    listaProduse[i].autor.toLowerCase().indexOf(document.getElementById("search").value.toLowerCase()) === -1) {
                    continue;
                }

                var rand = `
                
                <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="${listaProduse[i].imagine}" alt="">

                <div class="card-body">

                    <p class="price">
                        <span class="pret"> ${listaProduse[i].pret} lei</span>
                        <span>
                            <img src="add to cart.svg" class="cart" alt="">
                        </span>
                    </p>

                    <br/>

                    <h5 class="card-title">${listaProduse[i].titlu}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${listaProduse[i].autor}</h6>

                    <br/>


                    <p class=" description text-muted text-truncate"> ${listaProduse[i].descriere}
                    </p>


                    <div class="text-center ">

                        <a href="detalii.html?id=${i}" class="btn btn-success btn-sm" style="font-family: Open Sans"> Detalii
                            <span class="fab fa-envira"></span>
                        </a>      
                                      
                    </div>



                    </div>
                    
                </div>  `;

                str += rand;

                console.log(str);
                card.innerHTML = str;

            }
        }
    }

    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/.json", true);
    xhttp.send();
}     