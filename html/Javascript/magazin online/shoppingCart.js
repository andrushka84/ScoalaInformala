// Create shopping cart

var cart = [];

var item = function(price, name, count){
    this.name = name;
    this.price = price;
    this.count = count;
};

function addItemsToCart(name, price, count){

    for (var i in cart) {
        if (cart.name[i] === name) {
            cart[i].count += count;
            saveCart();

            return;
        }
    }

    var product = new item(name, price, count);
    cart.push(product);
    saveCart();
};

// Remove 1 item from cart
function removeItemFromCart(name){
    
    for( var i in cart){
        if (cart.name[i] === name) {
            // cart[i].count = cart[i].count-1; micsoram cantitatea
            cart[i].count --; 
            // eliminam obiectul din array
            if(cart[i].count===0){
                cart.splice(i,1)
            }

            break;
        }        
    }

    saveCart();
}

// Remove all items from cart

function removeItemsFromCartAll(name){
    for( var i in cart){
        if (cart.name[i] === name) {
            cart.splice(i,1)
            break;
        }        
    }

    saveCart();

}

// folosim asta in locul celei de mai sus
function clearCart(){
    cart[];
    saveCart();

}

// cate chestii  sunt in cart

function countCart(){
    var totalCount = 0;
    for( var i in cart){
        totalCount += cart[i].count;
    }

    return totalCount;
}
// calculam costul total

function totalCart(){
    var totalCost = 0;
    for( var i in cart){

        totalCost += cart[i].price;
    }

    return totalCost;
}

// display the cart on the page

function listCart(){

    var cartCopy=[];
    for( var i in cart){

        var item = cart[i];
        var itemCopy = {};

// loop through each property in the item
        for (var p in item) {
            itemCopy[p]=item[p];
        }

        cartCopy.push(itemCopy);
    }

    return cartCopy;
    
}


// save cart; sa ramana in memorie si dupa ce dai refresh

function saveCart(){
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

// load cart
function loadCart(){
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
}


// display cart????

function displayCart(){
    var cartArray = listCart();
    var output = "";
    for (var i in cartArray){
        output+="<li>"+cartArray[i].name+""+cartArray[i].count+"</li>";
    }

    // show cart
    // total cart
}