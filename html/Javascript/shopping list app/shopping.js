
// Fac un array gol 
var listaCumparaturi=[];

// Fac functia pt adaugare de produse
function addItem(){
    
    listaCumparaturi.push({
        produs:document.querySelector("#casuta").value,
    })

    drawCumparaturi();
}

// Fac un tabel cu lista de cumparaturi pe care o introduce utilizatorul

    function drawCumparaturi() {
        var tabel=document.querySelector("#listaCumparaturi tbody");
        // var checked = false


        var str="";

        for(var i=0;i<listaCumparaturi.length;i++){

            
            var rand = `<tr>

                <td>${listaCumparaturi[i].produs}</td>
                <td> <button id ="mark"> Mark as bought </button> <td/>

                     </tr>`;
            str +=rand;
        }

        console.log(str);
        tabel.innerHTML=str;
    }

    // Creez o functie care sa imi sorteze lista
    

// document.getElementById("listaCumparaturi").innerHTML = listaCumparaturi;


//    function sortAsc() {
//         listaCumparaturi.sort();
//         listaCumparaturi.getElementById("listaCumparaturi").innerHTML = listaCumparaturi;
//   }

//    function sortDesc(){
//         listaCumparaturi.reverse();
//         listaCumparaturi.getElementById("listaCumparaturi").innerHTML = listaCumparaturi;
//    }

function sortAsc (){listaClienti.sort(function(a,b){
    if(a[coloana]>b[coloana]){
        return 1;
    }else if(a[coloana]<b[coloana]){
        return -1;
    }else{
        return 0;
    }
}
}

