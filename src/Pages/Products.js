import { Link } from "react-router-dom";

const ProductsPage = () => {
  const PRODUCTS = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
  ];
  return (
    <div>
      <h1>This is product page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
