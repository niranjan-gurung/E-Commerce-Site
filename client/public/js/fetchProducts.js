const ul = document.querySelector("ul");

const loadProducts = async () => {
  await fetch("http://localhost:5000/products", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // data = array of objects:
      // each object contains data of each product:
      console.log(data);
      const products = data.products
        .map((product) => {
          const { _id: id, title, price, description, category } = product;
          return `
                <li>
                    <h3>${title}</h3>
                    <p>£${price}</p>
                    <p>${description}</p>
                    <p>${category}</p>
                </li>`;
        })
        .join("");
      ul.innerHTML = products;
    });
};

loadProducts();
