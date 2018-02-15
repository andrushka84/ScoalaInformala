// 1. O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale
 function comp1(a,b) {
    var a = 0; 
    var b = 0;

        if (a=b) {
            return true;

        } else {
            return false;
        }
 }
 console.log(comp1(2,5));

// 2. O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 
// 0 daca sunt egale si 1 daca primul e mai mare ca al doilea
function comp2(a,b) {
    var a = 0;
    var b = 0;

        if (a<b) {
        return -1;
        
    }   else if
        (a=b) {
        return 0;

        } else {
        return 1;
        } 
}
console.log(comp2(5,2));

// 3. O functie care primeste 2 valori si returneaza maximul dintre cele 2
function max(a,b){
    if (a>b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(2,5));

// 4.O functie care primeste 2 valori si returneaza minimul dintre cele 2
function min(a,b){
    if (a<b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(2,5));

//5. O functie care face suma dintre 2 valori
function suma(a,b) {
    return a+b;
}
console.log(suma(15,17));

//6. O functie care face diferenta dintre 2 valori
function diff(a,b) {
    return a-b;
}
console.log(diff(15,17));

//7. O functie care imparte 2 numere si returneaza rezultatul impartirii celor 2 numere (rezultatul trebuie sa fie integer --> fara zecimale)
function divv1(a,b) {
    return Math.round(a/b);
}
console.log(divv1(5,2));

//8. O functie care imparte 2 numere si returneaza rezultatul impartirii celor 2 numere (rezultatul trebuie sa fie float --> cu zecimale)
function divv2(a,b) {
    return a/b;
}
console.log(divv2(5,2));

//9. O functie care imparte 2 numere si returneaza restul impartirii celor 2 numere ( daca imparti 9 la 2, restul impartirii este 1, pentru 11 si 3, restul este 2, pentru 12 si 3 este 0)
function divv3(a,b) {
    return a%b;
}
console.log(divv3(5,2));

//10. Transforma din Miles/Galon in Litri/100KM
function lit100(a){
    return (100*3.785411784)/(a* 1.609344);
}
console.log(lit100(5));

//11. Transforma din Celsius in Fahrenheit
function gradF(a) {
    return(a-32)/1.8;
}
console.log(gradF(50));

//12. Transforma din Grade in Radiani
function rad(a) {
    return a*3.14/180;
}
console.log(rad(8));

//13. Returneaza suplementul unui unghi (suma unghiurilor este 180)
function supplement(x) {
    return 180 -x;
}
console.log(supplement(20));

//14. Returneaza complementul unui unghi (suma unghiurilor este 90)
function complement(x) {
    return 90 -x;
}
console.log(complement(20));