function sendAsJson(form, event){
    event.preventDefault();
    var list = form.querySelectorAll("input[name]");
    var obj = {};

    for (var i=0; i<list.length; i++){
        // Luam valoarea din input
         var val =list[i].value; 
        //  Pt aia cu var name
        // list[0]= nume;
        // list[1]= prenume; 
        // list[2]= varsta;
        // list[3]= telefon;
    
         var name = list[i].getAttribute("name");
        // Punem in obiect valoarea din input
         obj[name]= val;   

    }
    console.log(obj);



    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);

        }
    }

    xhttp.open("POST","https://inceput-firebase.firebaseio.com/.json" , true);
    // ce info trimit pe server
    xhttp.send(JSON.stringify(obj)); 



}