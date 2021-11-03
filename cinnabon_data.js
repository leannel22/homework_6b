var cinnabons = { 
    "original": {
        name: "Original", 
        photo: "images/Menu/original.png", 
        ingredients: "Milk, All-purpose flour, Butter, Brown sugar, Ground Cinnamon, Cream cheese, Vanilla Extract"
    },
    "blackberry": {
        name: "Blackberry", 
        photo: "images/Menu/blackberry.png", 
        ingredients: "Blackberries, Milk, All-purpose flour, Butter, Brown sugar, Ground Cinnamon, Cream cheese, Vanilla Extract"
    },
    "caramel_pecan": {
        name: "Caramel Pecan", 
        photo: "images/Menu/caramel_pecan.png", 
        ingredients: "Caramel, Pecan nuts, Milk, All-purpose flour, Butter, Brown sugar, Ground Cinnamon, Cream cheese, Vanilla Extract"
    },
    "walnut": {
        name: "Walnut", 
        photo: "images/Menu/blackberry.png", 
        ingredients: "Walnuts, Milk, All-purpose flour, Butter, Brown sugar, Ground Cinnamon, Cream cheese, Vanilla Extract"
    },
    "gluten_free": {
        name: "Gluten Free", 
        photo: "images/Menu/gluten_free.png", 
        ingredients: "Milk, All-purpose gluten-free flour, Butter, Brown sugar, Ground Cinnamon, Cream cheese, Vanilla Extract"
    },
    "pumpkin_spice": {
        name: "Pumpkin Spice", 
        photo: "images/Menu/pumpkin_spice.png", 
        ingredients: "Pumpkin, Nutmeg, Milk, All-purpose flour, Butter, Brown sugar, Ground Cinnamon, Cream cheese, Vanilla Extract"
    },
}

// Data structure = type of data that holds multiple values
// Consistent regimen dpends on how we structure ^
// Add to Cart --> need 4 pieces of info. They will be same (repetitive). Need labels for the 4 values. 
// "Labels for consistent values" =  need object!
// Object keys will always be name glaze quantity image and values will be different

// 1 cart item
// let aCartItem = {name:"original", quantity: 1, glaze: "sugar-milk", photo:"images/Menu/original.png"}
// let shoppingCart = [aCartItem, bCartItem]
// Set variable, put in localStorage