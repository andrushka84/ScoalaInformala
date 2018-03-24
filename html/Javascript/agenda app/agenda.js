
var listaClienti=[];
var indexModificat =-1;
function adauga(){
    
    listaClienti.push({
        nume:document.querySelector("#nume").value,
        phone:document.querySelector("#tel").value
    })

    drawClienti();
}
    function drawClienti() {
        var tabel=document.querySelector("#listaClienti tbody");
        var str="";
        for(var i=0;i<listaClienti.length;i++){

            var rand = `<tr>

                <td>${listaClienti[i].nume}</td>
    
                <td>${listaClienti[i].phone}</td>
                
                <td> <a href="#" id ="edit" onclick="edit(${i})">Modifica</a> <td/>

                <td> <a href="#" id ="del" onclick="del(${i})">Sterge</a> </td>

            </tr>`;
            str +=rand;
        }
        console.log(str);
        tabel.innerHTML=str;
    }
        


function edit(index){


    var client = listaClienti[index];
    document.querySelector("#nume").value=listaClienti[index].nume,
    document.querySelector("#tel").value= listaClienti[index].phone,
    indexModificat=index;

    if (indexModificat!==-1){
        listaClienti[indexModificat]={
            nume:document.querySelector("#nume").value,
            phone:document.querySelector("#tel").value,
        };

        indexModificat=-1;
        } else {

            listaClienti.push({
            nume:document.querySelector("#nume").value,
            phone:document.querySelector("#tel").value
        })
    }
    };


function del(index){
    listaClienti.splice(index,1);
    drawClienti();
}
