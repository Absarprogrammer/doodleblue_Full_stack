import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1>E-commerce Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.thumbnail}
            alt={product.title}
            width="150"
          />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default App;