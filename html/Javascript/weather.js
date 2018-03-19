
function city(){

    if (document.getElementById("nume").value !== null){
        var oras = document.getElementById("nume").value;
        var url = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=" + oras;
    }   


    var request = new XMLHttpRequest();
    // Ma intereseaza serverul sa fi terminat de incarcat (ready state === 4) si
    // Si sa nu dea eroare; status === 200 inseamna ca e OK.
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
            var latitudine = vreme.coord.lat ;
            var longitudine = vreme.coord.lon ;
            var icon = "http://openweathermap.org/img/w/"+vreme.weather[0].icon +".png";
             
            // *********************************************************************************
            // Initializez Google Maps
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

// **************************************************************************************************************

function prognoza() {

    if (document.getElementById("nume").value !== null){
        var oras = document.getElementById("nume").value;
        var url = 'https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=' + oras;
    }   
        // Fac capul de tabel cu datele alea albastre
        // new Date () imi arata data de azi in format full date (data, ziua, ora, minut, secunda)
        // toDateString = imi extrage ziua si data; se pare ca toTimeString nu suporta browserul
        var d1 = new Date();
        var dt1 = d1.toDateString();
        document.getElementById("d1").innerHTML=dt1;

        var month = d1.getMonth();
        var year = d1.getFullYear();
    
        var d2 = new Date(year, month, d1.getDate()+1);
        var dt2 = d2.toDateString();
        document.getElementById("d2").innerHTML=dt2;
       
        var d3 = new Date(year, month, d1.getDate()+2);
        var dt3 = d3.toDateString();
        document.getElementById("d3").innerHTML=dt3;
    
        var d4 = new Date(year, month, d1.getDate()+3);
        var dt4 = d4.toDateString();
        document.getElementById("d4").innerHTML=dt4;
    
        var d5 = new Date(year, month, d1.getDate()+4);
        var dt5 = d5.toDateString();
        document.getElementById("d5").innerHTML=dt5;
    
        var d6 = new Date(year, month, d1.getDate()+5);
        var dt6 = d6.toDateString();
        document.getElementById("d6").innerHTML=dt6;

        // Dau XMLHttpRequest

        var prog = new XMLHttpRequest();

        prog.onreadystatechange = function(){
            if(this.readyState===4 && this.status===200) {
                var vreme = JSON.parse(this.responseText);
                console.log(vreme); 
    
        for (var i = 0; i<vreme.list.length; i++){
        var col1= vreme.list[i].dt_txt;

    }
    // Calculez cate ore sa-mi afiseze in prima zi
    var b= d1.getHours();
               if (((24-b)/3)<=8 && ((24-b)/3)>7) {
            var y = 8;
        } else if (((24-b)/3)<=7 && ((24-b)/3)>6) {
            var y = 7
        } else if (((24-b)/3)<=6 && ((24-b)/3)>5) {
            var y = 6;
        } else if (((24-b)/3)<=5 && ((24-b)/3)>4) {
            var y = 5;
        } else if (((24-b)/3)<=4 && ((24-b)/3)>3) {
            var y = 4;
        } else if (((24-b)/3)<=3 && ((24-b)/3)>2) {
            var y = 3;
        } else if (((24-b)/3)<=2 && ((24-b)/3)>1) {
            var y = 2;
        } else {var y = 1}

        console.log(y);

       var testDiv = document.createElement("div");
       
       for (var j=1; j<y; j++){
           
        testDiv.innerHTML += '<img src = '+ "http://openweathermap.org/img/w/"+vreme.list[j].main.weather.icon
                             +".png>"+
                            '<span> Ora:' + vreme.list[j].dt_txt + '<span> <br/>'+
                            '<span> Temperatura:' + vreme.list[j].main.temp + '<span> <br/>'+
                            '<span> Descriere:' + vreme.list[j].main.weather.description +'<span> <br/>'
        }
        var z1Div = document.getElementById("z1");
        z1Div.appendChild(testDiv);


        // var div2 = document.createElement("div");

        // for (var v=y+1; v<y+9; v++){
           
        //     div2.innerHTML += '<img src = '+ "http://openweathermap.org/img/w/"+vreme.list[v].main.weather.icon +".png"
        //                         '<span> Ora:' + vreme.list[v].dt_txt + '<span> <br/>'+
        //                         '<span> Temperatura:' + vreme.list[v].main.temp + '<span> <br/>'+
        //                         '<span> Descriere:' + vreme.list[v].main.weather.description +'<span> <br/>'
        //     }
    
        //     var z2Div = document.getElementById("z2");
        //     z2Div.appendChild(div2);
        



    } 






prog.open("GET", url, true);
prog.send();

}

}
