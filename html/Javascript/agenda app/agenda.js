

// var listaClienti=[];

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         listaClienti=[];
//         var server = JSON.parse(this.responseText);
//         for(var i in server){
//             listaClienti.push(server[i]);
//         }
//         drawClienti();
//     }
// };
// Iau info de pe server
// xhttp.open("GET", "https://agenda-telefonica-3df42.firebaseio.com/.json", true);
// xhttp.send();


// Sterg info de pe server
// xhttp.open("DELETE", "https://agenda-telefonica-3df42.firebaseio.com/0/.json", true); 
// xhttp.send();


var indexModificat = -1;
function adauga() {



    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            drawClienti();
        }
    }

    // Adaug info de pe server
    xhttp.open("POST", "https://agenda-telefonica-3df42.firebaseio.com/.json", true);
    xhttp.send(JSON.stringify({
        nume: document.querySelector("#nume").value,
        phone: document.querySelector("#tel").value,
    }));


}
function drawClienti() {

   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            listaClienti=[];
            var server = JSON.parse(this.responseText);
            for(var i in server){
                listaClienti.push(server[i]);
            }   
   
   
    xhttp.open("GET", "https://agenda-telefonica-3df42.firebaseio.com/.json", true);
    xhttp.send();


    var tabel = document.querySelector("#listaClienti tbody");


    var str = "";
    for (var i = 0; i < listaClienti.length; i++) {

        var rand = `<tr>

                <td>${listaClienti[i].nume}</td>
    
                <td>${listaClienti[i].phone}</td>
                
                <td> <a href="#" id ="edit" onclick="edit(${i})">Modifica</a> <td/>

                <td> <a href="#" id ="del" onclick="del(${i})">Sterge</a> </td>

            </tr>`;
        str += rand;
    }
    console.log(str);
    tabel.innerHTML = str;
}



function edit(index) {


    var client = listaClienti[index];
    document.querySelector("#nume").value = listaClienti[index].nume,
        document.querySelector("#tel").value = listaClienti[index].phone,
        indexModificat = index;

    if (indexModificat !== -1) {
        listaClienti[indexModificat] = {
            nume: document.querySelector("#nume").value,
            phone: document.querySelector("#tel").value,
        };

        indexModificat = -1;
    } else {

        listaClienti.push({
            nume: document.querySelector("#nume").value,
            phone: document.querySelector("#tel").value
        })
    }
};


function del(index) {
    listaClienti.splice(index, 1);
    drawClienti();
}

}

}
