var listaPreparate=[];

function modificaPreparat(form, event){
    event.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                drawPreparateAdmin();
            }
        };
        var id =window.location.search.substring(4);

        xhttp.open("PUT", "https://menu-83f09.firebaseio.com/menu/" + id + ".json", true);
        xhttp.send(JSON.stringify({
            nume: form.querySelector("#name").value,
            imagine: form.querySelector("#site").value,
            ingrediente: form.querySelector("#ingredients").value,
            reteta: form.querySelector("#how").value,
        }));

    }

    // De pus functia "drawPreparateAdmin()" aici dupa ce rezolv din admin

    // **********************************************************************
    // function drawPreparateAdmin2(){
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
                
    //             listaPreparate = JSON.parse(this.responseText);
    
    
    //             var tabel=document.querySelector("#preparate tbody");
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
