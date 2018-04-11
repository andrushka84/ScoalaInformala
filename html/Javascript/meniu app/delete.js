var listaPreparate=[];

function stergePreparat(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            drawPreparateAdmin();
        }
    };
    var id =window.location.search.substring(4);

    xhttp.open("DELETE", "https://agenda-scoala-informala.firebaseio.com/menu/"+id+"/.json", true);
    xhttp.send();

}

// De pus functia "drawPreparateAdmin()" aici dupa ce rezolv din admin

// **********************************************************************
// function drawPreparateAdmin(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
            
//             listaPreparate = JSON.parse(this.responseText);


//             var tabel=document.querySelector("#preparate tbody");
//             var preparat = listaPreparate.nume;
//             document.getElementById("preparat").innerHTML = preparat;


//             var str="";
//             for(var i=0; i<listaPreparate.length; i++){

//                 var rand = `<tr>
//                     <td><img src="${listaPreparate[i].imagine}"></td>
//                     <td>${listaPreparate[i].nume} </td>
//                     <td>${listaPreparate[i].ingrediente}</span></td>
//                     <td>${listaPreparate[i].reteta}</td>
//                 </tr>`;
//                 str +=rand;
//             }
//             console.log(str);
//             tabel.innerHTML=str;
//         }
//     };
//     xhttp.open("GET", "https://menu-83f09.firebaseio.com/menu/.json", true);
//     xhttp.send();

// }

// *******************************************************************************************

