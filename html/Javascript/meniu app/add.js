function adaugaPreparat(form, event){
    event.preventDefault();
    if(indexModificat!==-1){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                drawPreparate();
            }
        };
        xhttp.open("PUT", "https://agenda-scoala-informala.firebaseio.com/"+indexModificat+"/.json", true);
        xhttp.send(JSON.stringify({
            nume: form.querySelector("[name=nume]").value,
            telefon: form.querySelector("[name=telefon]").value,
        }));
        indexModificat=-1;
    }else{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                drawPreparate();
            }
        };
        xhttp.open("POST", "https://agenda-scoala-informala.firebaseio.com/.json", true);
        xhttp.send(JSON.stringify({
            nume: form.querySelector("[name=nume]").value,
            telefon: form.querySelector("[name=telefon]").value,
        }));
    }

}