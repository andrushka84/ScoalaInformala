function valideaza(formular,e){
    console.log(formular.querySelector("nume").value);
    if (formular.querySelector([name="nume"]).value.length===0){
        formular.querySelector([name="nume"]).style.border="1 px solid red";
    }
     else { formular.querySelector([name="nume"]).style.border="0";
    }
    e.preventDefault (); 
}

// function schimbaInX (tabel,e){

// }

function showTab(index){
    
}

