//  Fac un array gol 
var listaElevi=[];
var indexModificat=-1;
		function addStudent(form, event){
            event.preventDefault();
            var elev ={};
            var nota =[];
            var medie = {};
			if(indexModificat!==-1){
				listaElevi[indexModificat]={
                elev:document.querySelector("#casuta").value,
                nota: document.querySelector("#nota").value,
                medie:nota.reduce((a,b) => a + b, 0) / nota.length,
};
			}else{
				listaElevi.push({
                    elev:document.querySelector("#casuta").value,
                    nota: document.querySelector("#nota").value,
                    medie:nota.reduce((a,b) => a + b, 0) / nota.length,
                });
            }
            drawElevi();
        }
function drawElevi(){
    var tabel=document.querySelector("#listaElevi tbody");
    var str="";
    for(var i=0;i<listaElevi.length;i++){
        
        var rand = `<tr>
        <td>${listaElevi[i].elev}</td>
        <td>${listaElevi[i].medie}</td>
        <td> <button class="grades" onclick = "see()"> Vezi notele </button> <td/>
        </tr>`;
        str +=rand;
    }
    console.log(str);
    tabel.innerHTML=str;
}


// Sortare ascendenta dupa medie 
function sortAscAvg(){
    listaElevi.sort(function(a,b) {return a.medie> b.medie;});
       drawElevi();
}

// Sortare descendenta dupa medie 
function sortDescAvg(){
    listaElevi.sort(function(a,b) {return a.medie< b.medie;});
       drawElevi();
}


// *************************************************************************************************
var indexModificat=-1;
function addGrade(form,event) {
    event.preventDefault();
    if(indexModificat!==-1){
        				listaElevi[indexModificat]={
                        nota:document.querySelector("#nota").value,
        };
        			}else{
        				listaElevi.push({
                        nota:document.querySelector("#nota").value,
        
                        });    
                    }
        
drawNote();
}

function drawNote(){
    var tabel=document.querySelector("#listaElevi tbody");
    var str="";
    for(var i=0;i<listaElevi.length;i++){
        
        var rand = `<tr>
        <td>${listaElevi[i].nota}</td>
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
    document.getElementById("listaNote").style.display="none";
}

// Vezi notele !!!!!!!!!!!! DE TERMINAT
function see(){
    document.getElementById("listaNote").style.display="block";
}

// Calculeaza media: sum(array)/array.length; tutorialul asta https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
// In our reduce function we have two parameters, a and b. In this code, a is our accumulator. 
// It will accumulate our sum as our function works. b is the current value being processed

// function mean(){
//     listaNote.reduce((a,b) => a + b, 0) / listaNote.length;
//     drawNote();
// }

