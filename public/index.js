console.log('hello from index.js');

const loadProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
        .then(res => { return res.json(); })
        .then(data => {
            // data = array of objects:
            // each object contains data of each product:
            // title, id, description, price etc.
            console.log(data);
            const products = data.map(product => {
                const { id, title, price, image } = product;
                console.log(id, title, price, image);

                return `<img src="${image}" width="150" height="200">`;
            });
            document.querySelector('ul').innerHTML = products;
        });
}

loadProducts();