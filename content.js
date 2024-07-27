// Code to scan the product and send the details to the background script
let product = {
  name: document.querySelector('.product-title')?.innerText || 'Unknown Product',
  price: document.querySelector('.product-price')?.innerText || 'Unknown Price'
};

chrome.runtime.sendMessage({product: product}, (response) => {
  if(response.alternative) {
    alert(`Eco-Friendly Alternative: ${response.alternative.name} - ${response.alternative.price}`);
  }
});
