

// 1 Selectez butonul in JS

var btn = document.getElementById("add");

// 2 Fac o functie care sa-mi adauge chestii cand apas pe buton
// ***********************************************************************************************
//a. Verific daca am scris ceva in casuta

function addItem() {

    function validate() {

        if (document.getElementById("casuta").value === null) {
            alert("Please write an item");
        } 
    };
    // *************************************************************************************************
    //b. Creez un rand de tabel care are un produs si un buton

    var input = document.getElementById("casuta").value;

    var add = document.createElement("table");

    add.innerHTML = "<tr>" +
        "<td>" + input + "</td>" +
        "<td>" + "<button class='mark' " + "onclick=strike()>" + "Mark as bought" + "</button>" + "</td>" +
        "</tr>";
    // ***************************************************************************************************
    // c.Creez o functie care sa-mi faca strikethrough

    function strike() {

        var strk = document.getElementsByClassName("mark");
        strk.setAttribute("style", "text-decoration: line-through;");
    }

    // d. Tabelul nou creat il lipesc la cel existent
    var t1 = document.getElementById("itemList");
    t1.appendChild(add);













}


