fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(json => console.log(json))