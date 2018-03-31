//  Fac un /array/ obiect gol 
var listaNume={};

// Fac functia pt adaugare de elevi

var indexModificat=-1;
		function addStudent(form, event){
			event.preventDefault();
			if(indexModificat!==-1){
				listaNume[indexModificat]={
                elev:document.querySelector("#casuta").value,
                // medie: document.queryselector()....
};
				// indexModificat=-1;
			}else{
				listaNume.push({
                    elev:document.querySelector("#casuta").value,

                });
                
            }

            drawElevi();
        }

// Creez o functie care imi deseneaza tabelul cu elevi
// var tabel=document.querySelector(".listaCumparaturi tbody") inseamna listaCumparaturi SAU tbody
//         <td>${listaNume[i].medie}</td>

function drawElevi(){
    var tabel=document.querySelector(".listaElevi tbody");
    var str="";
    for(var i=0;i<listaNume.length;i++){
        
        var rand = `<tr>
        <td>${listaNume[i].elev}</td>
        <td> <button class="grades" onclick = "see()"> Vezi notele </button> <td/>
        </tr>`;
        str +=rand;
    }
    console.log(str);
    tabel.innerHTML=str;
}


// Sortare ascendenta dupa medie 
function sortAscAvg(){
    listaNume.sort(function(a,b) {return a.medii> b.medii;});
       drawElevi();
}

// Sortare descendenta dupa medie 
function sortDescAvg(){
    listaNume.sort(function(a,b) {return a.medii< b.medii;});
       drawElevi();
}


// *************************************************************************************************

//  Fac un array gol 
var listaNote=[];

// Fac functia pt adaugare de note

var indexModificat=-1;
		function addGrade(form, event){
			event.preventDefault();
			if(indexModificat!==-1){
				listaNote[indexModificat]={
                nota:document.querySelector("#nota").value,
};
			}else{
				listaNote.push({
                    nota:document.querySelector("#nota").value,

                });    
            }

            drawNote();
        }

// Creez o functie care imi deseneaza tabelul cu note

function drawNote(){
    var tabel=document.querySelector("#listaNote tbody");
    var str="";
    for(var i=0;i<listaNote.length;i++){
        
        var rand = `<tr>
        <td>${listaNote[i].nota}</td>
        </tr>`;
        str +=rand;
    }
    console.log(str);
    tabel.innerHTML=str;
}

// Sortare ascendenta dupa note
function sortAsc(){
    listaNote.sort(function(a,b) {return a.nota> b.nota;});
       drawNote();
}

// Sortare descendenta dupa note
function sortDesc(){
    listaNote.sort(function(a,b) {return a.nota< b.nota;});
       drawNote();
}

// Ascundere note
function hide(){
    document.getElementById("listaNote").style.display="none"
}

// Vezi notele !!!!!!!!!!!! DE TERMINAT
function see(){
    document.getElementById("listaNote").style.display="block";
}

// Calculeaza media: sum(array)/array.length; tutorialul asta https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
// In our reduce function we have two parameters, a and b. In this code, a is our accumulator. 
// It will accumulate our sum as our function works. b is the current value being processed

function mean(){
    listaNume.reduce((a,b) => a + b, 0) / listaNote.length
    drawNote();
}

