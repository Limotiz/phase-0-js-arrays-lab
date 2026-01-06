// Write your code here

const products =[

  "Laptop", 
  "Phone", 
  "Headphones", 
  "Monitor" ]

function logFirstProduct(products) {
  
  console.log(products[0])
}

logFirstProduct(products);

// adding addProduct function
function addProduct(products, productName) {
  products.push(productName)
}
addProduct(products, "Keyboard");

console.log(products);

// adding updateProductName function
function updateProductName(products, index, newName) {
  products[index] = newName;
}
updateProductName(products, 1, "Smartphone");

console.log(products);

// adding remove function
function removeLastProduct(products) {
  products.pop();
}
removeLastProduct(products);
console.log(products);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
