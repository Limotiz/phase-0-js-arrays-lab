// Write your code here

const products =[

  "Laptop", 
  "Phone", 
  "Headphones", 
  "Monitor" ]

function logFirstProduct() {
  
  console.log(products[0])
}


// adding addProduct function
function addProduct(productName) {
  products.push(productName)
}

// adding updateProductName function
function updateProductName(index, newName) {
  products[index] = newName;
}

// adding remove function
function removeLastProduct(products) {
  products.pop()
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
