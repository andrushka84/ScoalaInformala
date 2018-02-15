var nume = "Popescu";
var prenume = "Ion";
var prenumeNume = prenume + " "+ nume;
console.log(prenumeNume);
function    sum(a,b) {
    return a+b
}
console.log(sum(5,7));
console.log(sum(9,20));
console.log(prenumeNume);
console.log(sum("Ana", " are mere"));

function max(a,b){
    if (a>b) {
        return a;
    } else {
        return b;
    }
}

console.log(max(5,7));
console.log(max(6,2));
console.log(max("a","b"));
console.log(max("t","g"));
console.log(max("aab","aba"));
console.log(max("abc","ABC"));
console.log(max("abc","987"));

function power(x) {
    return x*x*x;
}

console.log(power(2));

function supplement(x) {
    return 180 -x;
}
console.log(supplement(20));

function complement(x) {
    return 90 -x;
}
console.log(complement(20));


// perimetrul unui dreptunghi
function pDr(a,b){
    return 2*(a+b);
}
console.log(pDr(2,5));

// perimetrul unui patrat apeland la perimetrul unui dreptunghi - de reluat

 function pPt(a) {
    return pDr(a,a);
}
 console.log(pPt(2));

// arie con

function aCon(a,b){
    return 3.14*a*(a+b);
}

console.log(aCon(2,5));

// Transformare Celsius in Fahrenheit;
function gradF(a) {
    return(a-32)/1.8;
}
console.log(gradF(50));


// Pentru minimul a 3 nr folosim functia(metoda) Math.min(a,b,c)
function min(a,b,c) {
   return Math.min (a,b,c); 
}
console.log(min(5,6,7));

var dayNames =["luni", "marti", "miercuri", "joi", "vineri", "sambata", "duminica"];
console.log(dayNames);
 console.log(dayNames[2]);
 console.log(dayNames.length);

var pc={
        cpu:{
            familie:"i7",
            frecventa: "2GHz",
            producator: "Intel"

        },

        ram:{
            clockSpeed:"15",
            frecventa:2667

        }
};

console.log(pc);
console.log(pc.cpu);
console.log(pc["cpu"]);
console.log(pc.cpu.familie);
console.log(pc.cpu["familie"]);
console.log(pc["cpu"].familie);


var yo = {
    inaltime: 1.75,
    greutatate: 75,
    ochi:{
            culoare:"caprui",
            dioptrii: -2,
            numar:2     
    },
    
    buletin:{
        serie:"ab",
        numar:1234,
        cnp: 1234567890,
        loculNasterii: "R"
    },

    diplome:["bac", "licenta"],
        

};

console.log(yo);

var i=0
while(i<dayNames.length){
    console.log(dayNames[i]);
    i=i+1;
}

for(var i=0; i<dayNames.length;i++) {
    console.log(dayNames[i]);
}

console.log("=======================");

var nr = [5,7,9, 17, 2, -7];

// Suma elemente array

function sum(arr){
    var suma=0;
    for (var i=0; i<arr.length;i++) {suma += arr[i]}
    return suma;
}

console.log(sum(nr));


// Produs elemente array;
function prod(arr){
    var product=1;
    for (var i=0; i<arr.length;i++) {product *= arr[i]}
    return product;
}
console.log(prod(nr));

// Maxim elemente array - DE RELUAT;

function maxim(arr){
    var maxx=1;
    for (var i=0; i<arr.length;i++) {maxx = Math.max(arr[i])}
    return maxx;}

    console.log(maxim(nr));

// Sir palindrom;



