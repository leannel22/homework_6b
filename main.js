// 🧁 Cinnamon roll constructors

// function Original(flavor, glaze, count, price) {
//     this.flavor = flavor;
//     this.glaze = glaze;
//     this.count = count;
//     this.price = price;
//     this.image = "images/Menu/original.png"
//     this.image_alt = "A cinnamon roll with original flavoring.";
// }

// function Blackberry(flavor, glaze, count, price) {
//     this.flavor = flavor;
//     this.glaze = glaze;
//     this.count = count;
//     this.price = price;
//     this.image = "images/Menu/blackberry.png"
//     this.image_alt = "A cinnamon roll with blackberry flavoring.";
// }

// function Walnut(flavor, glaze, count, price) {
//     this.flavor = flavor;
//     this.glaze = glaze;
//     this.count = count;
//     this.price = price;
//     this.image = "images/Menu/walnut.png"
//     this.image_alt = "A cinnamon roll with walnut flavoring.";
// }

// function GlutenFree(flavor, glaze, count, price) {
//     this.flavor = flavor;
//     this.glaze = glaze;
//     this.count = count;
//     this.price = price;
//     this.image = "images/Menu/gluten_free.png"
//     this.image_alt = "A cinnamon roll with original gluten free flavoring.";
// }

// function Pumpkin(flavor, glaze, count, price) {
//     this.flavor = flavor;
//     this.glaze = glaze;
//     this.count = count;
//     this.price = price;
//     this.image = "images/Menu/pumpkin_spice.png"
//     this.image_alt = "A cinnamon roll with pumpkin spice flavoring.";
// }

// function Caramel(flavor, glaze, count, price) {
//     this.flavor = flavor;
//     this.glaze = glaze;
//     this.count = count;
//     this.price = price;
//     this.image = "images/Menu/caramel_pecan.png"
//     this.image_alt = "A cinnamon roll with caramel pecan flavoring.";
// }


// let rolls = [Original, Blackberry, Walnut, GlutenFree, Pumpkin, Caramel];
// let glaze = ["Sugar-milk", "Vanilla-milk", "Double-chocolate", "None"];
// let product = {};

function showDropdownContents() {
    document.getElementById("glaze_options").classList.toggle("show");
}

// Trying to make a backend JSON data storage
// function onClick () {
//     const productString = JSON.stringify(product);
//     console.log(productString);
//     localStorage.setItem("prod",productString);
//     localStorage.getItem("prod");
//     document.getElementById("glaze_dropdown").textContent = "test";
// }

// Individual functions for each dropdown option (will be optimized in the future)
function selectSMGlaze () {
    document.getElementById("glaze_dropdown").textContent = "Sugar-milk glaze";
    showDropdownContents();
}

function selectVMGlaze () {
    document.getElementById("glaze_dropdown").textContent = "Vanilla-milk glaze";
    showDropdownContents();
}

function selectDCGlaze () {
    document.getElementById("glaze_dropdown").textContent = "Double-chocolate glaze";
    showDropdownContents();
}

function selectNoGlaze () {
    document.getElementById("glaze_dropdown").textContent = "None";
    showDropdownContents();
}

function updateCartMessage()  {
    document.getElementById("cartMessage").textContent = "Item has been added to cart!🧁";
    document.getElementById("cartCount").textContent = "Updated: 3 total items";
}

function save_id(id) {
    localStorage.setItem("bun", id);
    console.log(id);
}

function load_details() {
    let bun_temp = localStorage.getItem("bun");
    document.getElementById("prod_name").innerHTML = `${cinnabons[bun_temp]["name"]} Cinnamon Roll`
    
}