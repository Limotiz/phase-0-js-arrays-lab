// Write your code here

const products =[

  "Laptop", 
  "Phone", 
  "Headphones", 
  "Monotor" ]

function logFirstProduct(products) {
  
  console.log(products[0])
}
// adding addProduct function
function addProduct(products, productName) {
  products.push(productName)
}
// adding updateProductName function
function updateProductName(products, index, newName) {
  products[index] = newName;
}

function removeLastProduct(products) {
  products.pop();
}
// adding remove function
removeLastProduct(products, [2])

console.log(products)

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
