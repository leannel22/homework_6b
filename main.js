// 🧁 Cinnamon roll constructors

// When you click Add to Cart
function updateCartMessage()  {
    document.getElementById("cartMessage").textContent = "Item has been added to cart!🧁";

    let glaze = document.getElementById("glaze_options").value;
    let count = 0;

    for (let i = 0; i < 4; i++) {
        let selected = document.getElementsByTagName("input")[i].checked;
        if (selected) {
            count = document.getElementsByTagName("input")[i].value;
        }
    }
    // Get the item info from localStorage
    let bun_temp = localStorage.getItem("bun");
    let cart_item = {glaze: glaze, count: count, name:cinnabons[bun_temp]["name"], photo:cinnabons[bun_temp]["photo"]};
    console.log(cart_item);

    // 1. Put data in a form you can use (not a string)
    // 2. Update it to whatever you need It to be
    // 3. Put it back into string form to send it places

    // Check if there is a localStorage item called cart (if not, create a new one)
    let cart = localStorage.getItem("shopping_cart");
    cart = JSON.parse(cart);
    
    // Update cart
    cart.push(cart_item);

    // Put it into string and set to localStorage
    cart = JSON.stringify(cart);
    localStorage.setItem("shopping_cart",cart);
}

function save_id(id) {
    localStorage.setItem("bun", id);
    console.log(id);
}

function load_details() {
    check_cart();
    let bun_temp = localStorage.getItem("bun");
    document.getElementById("prod_name").innerHTML = `${cinnabons[bun_temp]["name"]} Cinnamon Roll`
    document.getElementById("prod_img").src = `${cinnabons[bun_temp]["photo"]}`
    document.getElementById("prod_ingr").innerHTML = `${cinnabons[bun_temp]["ingredients"]}`
    // `` Back ticks will allow JS to put variables in HTML
}

// Checks if shopping cart exists, if not it makes a new one
function check_cart() {
    if (!localStorage.getItem("shopping_cart")){
        let shopping_cart = [];
        shopping_cart = JSON.stringify(shopping_cart);
        localStorage.setItem("shopping_cart",shopping_cart);
    }
}


function loadCart() {
    // go through all items in cart localstorage
    let cart = localStorage.getItem("shopping_cart");
    cart = JSON.parse(cart);
    let cartIndex = 0;
    let allCartItems = "";

    for (let elem of cart) {
        console.log(elem);
        let cartItem = 
        `<a href="product_details.html" id="cartItem${cartIndex}">
            <div class="flex-container-nomargin">
                <img class="flex-item img-cart" src="${elem.photo}">
                <div>
                    <p class="flex-item-nobottom body-bold">${elem.name}</p>
                    <p class="flex-item-nobottom secondary">${elem.glaze} glaze</p>
                    <p class="flex-item-nobottom secondary">$5.00</p>
                    <p class="flex-item-nobottom secondary">${elem.count} rolls</p>
                    <div class="flex-container-nomargin">
                        <p class="flex-item link">✏️Edit</p>
                        <p class="flex-item link" onclick="remove_item()">🗑Remove</p>
                    </div>
                </div> 
            </div>
        </a> `
        cartIndex += 1;
        allCartItems = allCartItems + cartItem;
    }
    document.getElementById("allCartItems").insertAdjacentHTML("beforeend", allCartItems);
    // console.log(allCartItems);
}

function remove_item(){
    document.getElementById('cartIndex').remove();
}

function totalItemCount(){
    document.getElementById("totalItemCount").textContent = "items in cart🧁";
}