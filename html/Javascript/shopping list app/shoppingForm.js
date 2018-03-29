// Fac un array gol 
var listaCumparaturi=[];

// Fac functia pt adaugare de produse

var indexModificat=-1;
		function addItem(form, event){
			event.preventDefault();
			if(indexModificat!==-1){
				listaCumparaturi[indexModificat]={
                produs:document.querySelector("#casuta").value,
};
				// indexModificat=-1;
			}else{
				listaCumparaturi.push({
                    produs:document.querySelector("#casuta").value,

                });
                
            }

            drawCumparaturi();
        }

// Creez o functie care imi deseneaza tabelul cu produse
function drawCumparaturi(){
    var tabel=document.querySelector("#listaCumparaturi tbody");
    var str="";
    for(var i=0;i<listaCumparaturi.length;i++){
        
        var rand = `<tr>
        <td>${listaCumparaturi[i].produs}</td>
        <td> <button onclick="strike()" ondblclick="clickTwice()"> Mark as bought </button> <td/>
           
        </tr>`;
        str +=rand;
    }
    console.log(str);
    tabel.innerHTML=str;
}

// Creez o functie care imi sorteaza ascendent; tutorialul asta https://www.youtube.com/watch?v=PQEe9HNwCUY

function sortAsc(){

    listaCumparaturi.sort(function(a,b) {return a.produs> b.produs;});
   
       drawCumparaturi();
}

// Creez o functie care imi sorteaza descendent; tutorialul astahttps://www.youtube.com/watch?v=PQEe9HNwCUY
// listaCumparaturi a devenit un obiect

function sortDesc() {
    listaCumparaturi.sort(function(a,b) {return a.produs< b.produs;});
    drawCumparaturi();
}

// Sortare dupa index - nu merge pentru ca nu sorteaza alfabetic, iar in tema tb sa fie alfabetic
// function sortDesc(indexModificat){

//     listaCumparaturi.sort(function(a,b){
//         if(a[indexModificat]>b[indexModificat]){
//             return 1;
//         }else if(a[indexModificat]<b[indexModificat]){
//             return -1;
//         }else{
//             return 0;
//         }
//     });

//     listaCumparaturi.reverse();

//     drawCumparaturi();
// }



// Creez o functie care imi face o clasa de CSS on click 


function strike(){
    var myStuff = document.querySelector("listaCumparaturi, td");
    myStuff.classList.add("strike")
}


// Creez o functie care la dblclick imi sterge clasa de CSS creata la pasul anterior

function clickTwice(){
    var myStuff = document.querySelector("listaCumparaturi, td");
    myStuff.classList.remove("strike")
}