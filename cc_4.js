// Task 1. Create an Inventory Array of Product Objects

let inventory = [
    {name: "cups", price: 3.00, quantity: 50, lowStockLevel: 30},
{name: "napkins", price: 5.00, quantity: 100, lowStockLevel: 40}, 
{name: "forks", price: 2.00, quantity: 200, lowStockLevel:50},
{name:"spoons", price: 2.50, quantity: 150, lowStockLevel:50},
{name:"straws", price: 1.50, quantity: 300, lowStockLevel:70},
 ];
 console.log(inventory);
 // Initialize inventory with product objects

 // Task 2. Create a Function to Display Product Details

 function displayProductDetails () {
    const status = inventory.quantity <=inventory.lowStockLevel ? "Low Stock": "In Stock"
    return '${inventory.name} is ${status}'
 }
 console.log (display(inventory[0])); 
 //Create displayProductDetails function

 // Task 3: Create a Function to Update Product Stock After Sales
 function updateStock () {
    product.quantity -= unitsSold;
    const status = product.quantity <=0 ? "Out of Stock" : product.quantity <= product.lowStockLevel ? "Low Stock";
 }
if (updateStock <=0) {
    console.log ("Out of Stock");
}  else if (updateStocK <= product.lowStockLevel) {
    console.log ("Low Stock");
} 
// Create updateStock function

// Task 4. Create a Function to Check Low Stock Products

function checkLowStock () 
let inventory= [
    {name: "cups", price: 3.00, quantity: 50, lowStockLevel: 30},
{name: "napkins", price: 5.00, quantity: 100, lowStockLevel: 40}, 
{name: "forks", price: 2.00, quantity: 200, lowStockLevel:50},
{name:"spoons", price: 2.50, quantity: 150, lowStockLevel:50},
{name:"straws", price: 1.50, quantity: 300, lowStockLevel:70},
 ]; {
    inventory.forEach(product => {
        if (product.quantity < product.lowStockLevel) {
            console.log('Product "$product.name}" low stock ${product.quantity}');
        }}



// Create checkLowStock function

// Task 5. Create a Function to Calculate Total Inventory Value
function calculateInventoryValue ()
    return inventory.reduce ((totalValue, Product) => {
        return totalValue + (product.price * product.quantity)}, );
    }
    const inventoryTotalValue = calculateInventoryValue();
    console.log ('Total Inventory Value $${inventoryTotalValue}'); 
//Create calculateInventoryValue function

// Task 6. Create a Function to Process a Sale 

const inventory = [
  { name: "cups", price: 3.00, quantity: 50, lowStockLevel: 30 },
  { name: "napkins", price: 5.00, quantity: 100, lowStockLevel: 40 }, 
  { name: "knives", price: 6.00, quantity: 201, lowStockLevel: 70 },
  
];

function processSale () [
   let findproductname = inventory.find ((name))
   if {} (productname is found "updateStock"-= quantity)
} 
 else if ('productname is not found "The Product is not found in inventory')
 // Create processSale function











 




