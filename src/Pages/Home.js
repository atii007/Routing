import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>This is Home Page</h1>
      <p>
        Go to <Link to="/products">the list of Products</Link>.
      </p>
      <button onClick={navigationHandler}>Navigate</button>
    </>
  );
}

export default HomePage;
