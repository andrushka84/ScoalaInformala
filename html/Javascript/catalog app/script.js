    var listaElevi=[];
    var elev ={};
    var nota =[];
    var medie = {};
    var indexModificat=-1;

    // Functie adaugare elev

		function addStudent(form, event){

            event.preventDefault();
				listaElevi.push({
                    elev:document.querySelector("#casuta").value,
                    nota:nota,
                    medie:nota.reduce((a,b) => a + b, 0) / nota.length,
                });
            drawElevi();
        }

    
        function drawElevi(){
            var tabel=document.querySelector("#listaElevi tbody");
            var str="";
            for(var i=0;i<listaElevi.length;i++){
                var rand = `<tr>
                <td>${listaElevi[i].elev}</td>
                <td>${listaElevi[i].medie}</td>
                <td> <input type="button" class="grades" onclick = "show(${i})" value = "Vezi notele">   <td/>
                </tr>`;
                str +=rand;
            }
            console.log(str);
            tabel.innerHTML=str;
        }

// Functie adaugare nota
        function addGrade(form,event) {
            event.preventDefault();
            var note = parseInt(document.querySelector("#nota").value);
            var marks =listaElevi[indexModificat].nota.push(note);
            
            drawNote();
        }

function drawNote(){
    var tabel=document.querySelector("#listaNote #bd");
    var str="";

    for(var i=0;i<listaElevi[indexModificat].nota.length;i++){
        var rand = `<tr>
        <td>${listaElevi[indexModificat].nota[i]}</td>
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
    document.getElementById("note_elev_wrapper").style.display="none";
}

// Vezi notele 
function show(i){
    document.getElementById("note_elev_wrapper").style.display="block";
    indexModificat = i;
    drawNote();
}

// Calculeaza media: sum(array)/array.length; tutorialul asta https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
// In our reduce function we have two parameters, a and b. In this code, a is our accumulator. 
// It will accumulate our sum as our function works. b is the current value being processed

function mean(){
    listaNote.reduce((a,b) => a + b, 0) / listaNote.length;
    drawNote();
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
