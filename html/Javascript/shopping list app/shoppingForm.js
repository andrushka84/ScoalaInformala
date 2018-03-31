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
// var tabel=document.querySelector(".listaCumparaturi tbody") inseamna listaCumparaturi SAU tbody

function drawCumparaturi(){
    var tabel=document.querySelector(".listaCumparaturi tbody");
    var str="";
    for(var i=0;i<listaCumparaturi.length;i++){
        
        var rand = `<tr>
        <td>${listaCumparaturi[i].produs}</td>
        <td> <button class="mark" onclick="strike(this)"> Mark as bought </button> <td/>
           
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

// Creez o functie care imi sorteaza descendent; tutorialul asta https://www.youtube.com/watch?v=PQEe9HNwCUY
// listaCumparaturi a devenit un obiect

function sortDesc() {
    listaCumparaturi.sort(function(a,b) {return a.produs< b.produs;});
    drawCumparaturi();
}


// Creez o functie care imi face o clasa de CSS cand dau click
// tutorialul asta  https://www.w3schools.com/jsref/prop_element_classlist.asp
function strike(element){

    if (element.parentElement.parentElement.classList.contains("strike")) 
         {element.parentElement.parentElement.classList.remove("strike")}
    else {element.parentElement.parentElement.classList.add("strike")};

}
