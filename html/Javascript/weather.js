
function city(){

    if (document.getElementById("nume").value !== null){
        var oras = document.getElementById("nume").value;
        var url = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=" + oras;
    }   


    var request = new XMLHttpRequest();
    // Ma intereseaza serverul sa fi terminat de incarcat (ready state = 4) si
    // Si sa nu dea eroare; status = 200 inseamna ca e OK.
    // Vreau sa transform variabila vreme in obiect JSON si utilizez JSON parse pt asta
    request.onreadystatechange = function(){
        if(this.readyState===4 && this.status===200) {
            var vreme = JSON.parse(this.responseText);
            console.log(vreme);
            // Astea sunt variabilele care imi trebuie;
            // Dau click pe adresa de net de la request.open () sa-mi afiseze API in format text 
            
           
            var descriere = vreme.weather[0].description;
            var umiditate = vreme.main.humidity;
            var presiune = vreme.main.pressure;
            var temperatura = vreme.main.temp;
            var minima=vreme.main.temp_min;
            var maxima = vreme.main.temp_max;
            // *********************************************************************************
            var latitudine = vreme.coord.lat ;
            var longitudine = vreme.coord.lon ;
            var icon = "http://openweathermap.org/img/w/"+vreme.weather[0].icon +".png";
             
            // *********************************************************************************
            initMap(latitudine, longitudine);

            // *********************************************************************************
            // Pun variabilele din Javascript in HTML
        document.getElementById("descriere").innerHTML = descriere;
        document.getElementById("umiditate").innerHTML = umiditate;
        document.getElementById("presiune").innerHTML = presiune;
        document.getElementById("tempCurenta").innerHTML = temperatura;
        document.getElementById("minima").innerHTML = minima;
        document.getElementById("maxima").innerHTML = maxima;
        document.getElementById("icon").src = icon;
        }           

        
}

request.open("GET", url, true);
request.send();
}

// "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=Paris"


// **************************************************************************************************************
// function prognoza() {

//     if (document.getElementById("nume").value !== null){
//         var oras = document.getElementById("nume").value;
//         var url = 'https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=' + oras;
//     }   

// var forecast = new XMLHttpRequest();
    
// forecast.onreadystatechange = function(){
//     if(this.readyState===4 && this.status===200) {
//         var vreme = JSON.parse(this.responseText);
//         console.log(vreme);     
// }

// }

// }