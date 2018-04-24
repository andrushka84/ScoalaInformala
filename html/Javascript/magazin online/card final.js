function drawProduse() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var listaProduse = JSON.parse(this.responseText);

            for (var i in listaProduse) {

                if (document.getElementById("search").value !== '' &&
                    listaProduse[i].titlu.toLowerCase().indexOf(document.getElementById("search").value.toLowerCase()) === -1 &&
                    listaProduse[i].autor.toLowerCase().indexOf(document.getElementById("search").value.toLowerCase()) === -1) 
                    {
                    continue;
                }
                var photo = listaProduse[i].imagine;
                var price = listaProduse[i].pret;
                var title = listaProduse[i].titlu;
                var author = listaProduse[i].autor;
                var description = listaProduse[i].descriere;
                
                document.getElementsByClassName("card-img-top").src = photo;
                document.getElementsByClassName("pret").innerHTML = price;
                document.getElementsByClassName("card-title").innerHTML = title;
                document.getElementsByClassName("card-subtitle").innerHTML = author;
                document.getElementsByClassName("description").innerHTML = description;
            }
        }
    }
    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/.json", true);
    xhttp.send();
}     