
var subtotal = 0;


function aduProdusul() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            listaProduse = JSON.parse(this.responseText);

            var poza = listaProduse.imagine;
            document.getElementById("poza").src = poza;

            var produs = listaProduse.titlu;
            document.getElementById("produs").innerHTML = produs;

            var pret = parseInt(listaProduse.pret);
            document.getElementById("pret").innerHTML = pret;

            var cantitate= parseInt(document.getElementById("cantitate").value);

            subtotal = pret * cantitate;
            document.getElementById("subtotal").innerHTML = subtotal;

            var tva = 0.19 * subtotal;
            document.getElementById("tva").innerHTML = tva;

            var total = subtotal + tva ;
            document.getElementById("total").innerHTML = total;

            // *****************************************************************************************
            memoreazaCosul(event);

            // *****************************************************************************************
            // deseneazaCosul();
        }
    };

    var id =window.location.search.substring(4);
   

    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/"+id+"/.json", true);
    xhttp.send();
}


function stergeProdusDinCos() {

     subtotal = 0;
     document.getElementById("subtotal").innerHTML = subtotal;

     var tva = 0.19 * subtotal;
     document.getElementById("tva").innerHTML = tva;
     
     var total = subtotal + tva;
     document.getElementById("total").innerHTML = total;

     document.getElementById("loading").style.display = "none";
     
}


function actualizeazaCosul(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            listaProduse = JSON.parse(this.responseText);

            var poza = listaProduse.imagine;
            document.getElementById("poza").src = poza;

            var produs = listaProduse.titlu;
            document.getElementById("produs").innerHTML = produs;

            var pret = parseInt(listaProduse.pret);
            document.getElementById("pret").innerHTML = pret;

            var cantitate= parseInt(document.getElementById("cantitate").value);

            subtotal = pret * cantitate;
            document.getElementById("subtotal").innerHTML = subtotal;

            var tva = 0.19 * subtotal;
            document.getElementById("tva").innerHTML = tva;

            var total = subtotal + tva ;
            document.getElementById("total").innerHTML = total;

        }
    };

    var id =window.location.search.substring(4);
   
    xhttp.open("GET", "https://magazin-online-64a15.firebaseio.com/"+id+"/.json", true);
    xhttp.send();
}


    function memoreazaCosul(event){
        event.preventDefault();
        
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                }
            };
            
            xhttp.open("POST", "https://shopping-cart-magazin-online.firebaseio.com/.json", true);
            xhttp.send(JSON.stringify({

                poza: document.querySelector("#poza").src,
                produs: document.querySelector("#produs").innerHTML,
                pret: document.querySelector("#pret").innerHTML,
                cantitate: document.querySelector("#cantitate").value,
                subtotal: document.querySelector("#subtotal").innerHTML,
                tva: document.querySelector("#tva").innerHTML,
                total: document.querySelector("#total").innerHTML,

            }));
    
        }
    

// DE TERMINAT ****************************************************************************************************
// function deseneazaCosul(){

// var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {

//             listaProduse = JSON.parse(this.responseText);

//             // *****************************************************************************************
//             var tabel=document.querySelector("#cart tbody");
// 			var str="";

// 			for(var i in listaProduse){
				
// 				//  listaProduse[i].id = i;

//                 var rand = `<tr>

//                 <td>
//                         <div class="col-sm-2">
//                                 <img src="" alt="..." class="img-responsive" id="poza"/>
//                                 </div>
//                 </td>

//                 <td data-th="Product">
//                     <div class="row">
//                         <div class="col-sm-10 " id="produs"></div>
                        
//                     </div>
//                 </td>
               
//                 <td data-th="Price" id="pret"></td>
//                 <td data-th="Quantity" >
//                     <input type="number" class="form-control text-center" value="1" id="cantitate">
//                 </td>
//                 <td data-th="Subtotal" class="text-center" id="subtotal"></td>
//                 <td class="actions" data-th="">
//                     <button class="btn btn-info btn-sm" id="refresh" ><i class="fas fa-sync-alt" onclick="actualizeazaCosul()"></i></button>
//                     <button class="btn btn-danger btn-sm" id="delete" onclick="stergeProdusDinCos()"><i class="fas fa-trash"></i></button>								
//                 </td>

//                <tr/> `

// 				str +=rand;
// 			}
// 			console.log(str);
// 			tabel.innerHTML=str;
// 		}
// 	};
//             // *****************************************************************************************

        
    

//     xhttp.open("GET", "https://shopping-cart-magazin-online.firebaseio.com/.json", true);
//     xhttp.send();


// }


function stergeCosul(){

    document.querySelector("#cart").remove();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           
         
            document.querySelectorAll(".wrapper").innerHTML=  
            `
              <p id="gol"> Cosul tau este gol. </p> 
              <a href="card final.html" class="btn btn-warning">
              <i class="fas fa-angle-left"></i> Continua cumparaturile</a>

            ` 
        
        }
    };

    xhttp.open("DELETE", "https://shopping-cart-magazin-online.firebaseio.com/.json", true); 
    xhttp.send();

   
   
}