/*1. O functie care primeste un sir de caractere si returneaza lungimea sirului*/
function txt(a){
    return a.length;
};
console.log( txt("John"));

/*2. O functie care primeste un array cu numere si returneaza maximul dintre acele numere*/
var a1=[1,2,3,8,-7];
function max(a1){
    return Math.max(...a1);
}
console.log(Math.max(...a1));

/*3. O functie care primeste un array cu numere si returneaza minimul dintre acele numere*/
var b1=[1,2,-3,-8,-7];
function min(b1){
    return Math.min(...b1);
}
console.log(Math.min(...b1));
/*4. ***O functie care primeste un sir de caractere si returneaza un alt sir de caractere care contine doar cifrele din sirul respectiv de caractere
*/
function cifre(a) {
  return a.split();
}
console.log(cifre("55John"));

/*5. O functie care primeste un sir de caractere si returneaza un alt sir de caractere care contine doar literele a-f,
 in aceeasi ordine ca in sirul initial */
/*6. O functie care primeste un sir de caractere si returneaza primele 5 litere din el (daca exista) */
function top5 (a){
    return a.substring(0,5);
}
console.log(top5("Abracadabra"));

/*7. *** O functie care primeste un sir de caractere si returneaza ultimele 10 litere (daca exista) */
function last10(m){
       var last = 0;
           last = m.split();
       for (var i=0; i<=9; i++) {
       console.log(last[last.length-i]);
} 
}
console.log(last10("Abracadabra"));

/*8. O functie care primeste un sir de caractere si un caracter. 
Returneaza pozitia pe care se afla respectivul caracter pentru prima oara in sir
function */

var a =["red", "yellow", "blue"];
var b = "y";


/*9. O functie care primeste un sir de caractere si un caracter. 
Returneaza pozitia pe care se afla respectivul caracter pentru ultima oara in sir */

/*10. O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate */
var lista = ["John", "Terminator"];
function conc(lista) {
    return lista.join(" ");
}
console.log(conc(lista));

/*11. O functie care primeste o lista de siruri de caractere si inca un sir de caractere 
si returneaza sirurile concatenate despartite prin respectivul sir 
( de ex ["asd", "qwe", "zxc"] si despartitorul este ": ", rezultatul este  "asd: qwe: zxc") */
var list1 = ["John", "Terminator"];
function conc(list1) {
    return list1.concat();
}
console.log(list1.concat());

/* 12. Calculeaza factorialul unui numar.
Gasita in devtools tutorials https://developers.google.com/web/tools/chrome-devtools/javascript/reference */

function factorial(n) {
    var product = 0; 
    for (var i = 1; i <= n; i++) {
      product += i;
    }
    return product;
}

console.log(factorial(3));
/*13. Calculeaza cel mai mare divizor comun al 2 numere 
 https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-2.php*/

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(2154, 458));

/*14. Calculeaza cel mai mic multiplu comun al 2 numere */
function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
 }
 
 function gcd_two_numbers(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     var t = y;
     y = x % y;
     x = t;
   }
   return x;
 }
 console.log(lcm_two_numbers(3,15));
 console.log(lcm_two_numbers(10,15));

/*15. Returneaza un array care sa contina toti divizorii unui numar. 
Ex pentru 64: trebuie sa returneze [2,4,8,16,32] */
function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]


function numFactors(num)
{
var factors=1;
for(var i=2; i<=num; i++)
{
if(num%i === 0)
{
factors = factors+", " +i;
}
}
console.log(factors);
}
numFactors(15);





/*16. Returneaza un array care sa contina toti divizorii primi a unui numar. 
Ex pentru 64: trebuie sa returneze [2,2,2,2,2,2,2,2]*/
/*17. Returneaza un array care sa contina toti divizorii unici primi a unui numar: 
Ex pentru 64: trebuie sa returneze [2]*/
/*18. Care primeste 2 arrayuri ca parametru si returneaza un singur array cu toate elementele */

var x = [1,2,3]
var y =[4,5,6]
var z = x +","+ y;
var t = z.split();

function xy(x,y){
    return z.split();
}
console.log(t);

/*19. Care returneaza un String in ordine inversa. Ex: pentru ABC returneaza CBA */

function invers(s) {
    return s.split('').reverse().join('');
  }
console.log(invers("abc"));

/*20. Care verifica daca un numar este palindrom 
(se scrie la fel si de la sfarsit la inceput si de la inceput la sfarsit. Ex: ASDDSA) */

function palindrom(s) {
    
    if (invers(s)= s) {
         console.log("Sirul este palindrom")
    }  else {
         console.log ("Sirul nu este palindrom")
    }
}
 console.log(palindrom("abc"));

