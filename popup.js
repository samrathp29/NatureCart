document.addEventListener('DOMContentLoaded', function() {
  let content = document.getElementById('content');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getProduct"}, function(response) {
      if(response.product) {
        fetch('http://localhost:3000/alternatives', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({product: response.product})
        })
        .then(res => res.json())
        .then(data => {
          content.innerHTML = `<h2>Eco-Friendly Alternatives</h2><p>${data.alternative.name} - ${data.alternative.price}</p>`;
        });
      }
    });
  });
});
