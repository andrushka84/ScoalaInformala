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


// Pentru minimul a 2 nr folosim functia(metoda) Math.min(a,b,c)
function min(a,b,c) {
   return Math.min (a,b,c); 
}
console.log(min(5,6,7));


