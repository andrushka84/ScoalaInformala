//Tabel de stari

function sum(array){
    var total =0
    for (var i=0; i<array.length; i++){
        total+=array[i];
    }
    return total;
}

var arr =[-3,5,10,-7];
var avg = sum(arr)/arr.length;
for(var i=0; i<arr.length; i++) {
    if (avg>=arr[i])
    console.log(arr[i]);
}

// Parcurgere normala

function parcurgere(arr){
    for (var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}


// Parcurgere inversa

function parcurgereInversa1(arr){
    for (var i=arr.length-1;i>=0; i--){
        console.log(arr[i]);

    }
}

function parcurgereInversa2(arr){
        for (var i=0; i<arr.length; i++){
            console.log(arr[arr.length-1-i]);
        }
 }

// function primCorect(x){
//     for (var i=2; i<= n-1;i++) {
//         if (x%i==0){
//             return "nu este prim";
//         } 

//         }
        
//         return "este prim";
//     }
// console.log(primCorect(2));
// console.log(primCorect(3));
// console.log(primCorect(7));
// console.log(primCorect(5));
// console.log(primCorect(25));

// function divizoriPrimi(x){
//     for (var i=2; i<n;i++){
//         if (n%i===0){
//             divizori.push(i);
//         }
//         while (primCorect (i)&&n>i&&n%i==0)
//         {
//             divizori.push(i);
//         }
//     }
// }
