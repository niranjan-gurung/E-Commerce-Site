console.log('hello from products.js');

const loadProducts = async () => {
    await fetch('https://fakestoreapi.com/products', {
        method: 'GET'
    })
    .then(res => { return res.json(); })
    .then(data => {
        // data = array of objects:
        // each object contains data of each product:
        // title, id, description, price etc.
        console.log(data);
        const products = data.map(product => {
            const { id, title, price, image } = product;
            //console.log(product);

            return `<img src="${image}" width="150" height="200">`;
        });
        document.querySelector('ul').innerHTML = products;
    });
}

loadProducts();
//module.export = { loadProducts };